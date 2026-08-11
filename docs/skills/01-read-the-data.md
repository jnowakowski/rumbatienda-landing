# Skill: read the data

Load this when you want to see what is actually happening in production: read
logs, trace one request end to end, or check whether a change had the effect
you expected.

We run our own Loki log aggregation. You have full read and write access to it.
This is the source of truth for runtime behavior, ahead of any assumption.

The reach matters: one token reads the whole ecosystem. The events site you
work on (rumba.rumbatienda.com) and the Swiss schedule (tumbao.ch) log into the
same Loki. So you can see how traffic flows between the parts: tumbao drives
people somewhere, they land on rumba, rumba links onward. Each part powers the
others, and the data lets you see that as one picture, not separate islands.

## Endpoint and auth

```
Query:  https://loki-rumba.statsbox.ch/loki/api/v1/query_range
Push:   https://loki-rumba.statsbox.ch/loki/api/v1/push
```

Access is gated by Cloudflare Access. Every request needs these headers:

```
X-Scope-OrgID: <tenant>
CF-Access-Client-Id: <CF_ACCESS_ID>
CF-Access-Client-Secret: <CF_ACCESS_SECRET>
```

Put the two CF Access values in your environment as `CF_ACCESS_ID` and
`CF_ACCESS_SECRET`. They are delivered to you out of band, never committed to
git. The one token can read and write every tenant, so do not expect a separate
credential per app.

`X-Scope-OrgID` picks the tenant. You set it per query depending on which part
of the ecosystem you want to read:

| Tenant | Selector | What it is |
|--------|----------|------------|
| `default` | `{service="rumba"}` | rumba.rumbatienda.com events site (your main repo) |
| `tumbao` | `{app="tumbao"}` | tumbao.ch Swiss schedule + WhatsApp intake |
| `default` | `{service="llm-gateway"}` | one row per LLM request: spend, tokens, model |

The browser view of the same data is Grafana at
`https://grafana-rumba.statsbox.ch` (Google login with the team account).

## Verify access in one command

```bash
curl -s -G "https://loki-rumba.statsbox.ch/loki/api/v1/query_range" \
  --data-urlencode 'query={service="rumba"}' \
  --data-urlencode "start=$(python3 -c 'import time;print(int((time.time()-3600)*1e9))')" \
  --data-urlencode "limit=5" \
  -H "X-Scope-OrgID: default" \
  -H "CF-Access-Client-Id: $CF_ACCESS_ID" \
  -H "CF-Access-Client-Secret: $CF_ACCESS_SECRET" | python3 -m json.tool | head -40
```

If you get `"status": "success"` and some log lines back, you are in. If you get
an HTML login page or a 403, the token is wrong or not yet active.

## Reading: LogQL by example

Recent rumba site activity:

```logql
{service="rumba"}
```

Only errors in the last hour:

```logql
{service="rumba", detected_level="error"}
```

Trace one request by its id. The request id lives in the log body, not in a
label, so you filter it after parsing the JSON:

```logql
{service="rumba"} | json | request_id="abc123"
```

Count requests by a body field:

```logql
sum by (path) (count_over_time({service="rumba"} | json [1h]))
```

Did my new event start firing after I shipped?

```logql
sum(count_over_time({service="rumba"} | json | msg="cta_click" [6h]))
```

Cross-ecosystem: how much traffic did tumbao.ch see in the same window (switch
the tenant header to `tumbao` for this one):

```logql
{app="tumbao"} | json | path_kind="public_event"
```

## How to find what you need

1. Start broad with the stream selector (`{service="rumba"}`), narrow with `|=`
   and `| json | field="value"`.
2. Labels are for low cardinality only (`service`, `env`, `detected_level`).
   Everything high cardinality (request id, slug, handle) is in the JSON body,
   so you filter it with `| json | field="..."`, not with `{...}`.
3. If you cannot find a field, it probably was not logged. That is a gap to fix
   in the code, see skill 02. Read the data first, change the code second.
