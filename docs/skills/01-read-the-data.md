# Skill: read the data

Load this when you want to see what is actually happening in production: read
logs, trace one request end to end, or check whether a change had the effect
you expected.

We run our own Loki log aggregation. You have full read and write access to it.
This is the source of truth for runtime behavior, ahead of any assumption.

## Endpoint and auth

```
Query:  https://loki-rumba.statsbox.ch/loki/api/v1/query_range
Push:   https://loki-rumba.statsbox.ch/loki/api/v1/push
```

Access is gated by Cloudflare Access. Every request needs three headers:

```
X-Scope-OrgID: tumbao
CF-Access-Client-Id: <CF_ACCESS_ID>
CF-Access-Client-Secret: <CF_ACCESS_SECRET>
```

Put the two CF Access values in your environment as `CF_ACCESS_ID` and
`CF_ACCESS_SECRET`. They are delivered to you out of band, never committed to
git. The same token can read and write every tenant, so do not expect a
separate write credential.

`X-Scope-OrgID` is the tenant. Today everything Tumbao related lives under
tenant `tumbao`.

## Verify access in one command

```bash
curl -s -G "https://loki-rumba.statsbox.ch/loki/api/v1/query_range" \
  --data-urlencode 'query={app="tumbao"}' \
  --data-urlencode "start=$(python3 -c 'import time;print(int((time.time()-3600)*1e9))')" \
  --data-urlencode "limit=5" \
  -H "X-Scope-OrgID: tumbao" \
  -H "CF-Access-Client-Id: $CF_ACCESS_ID" \
  -H "CF-Access-Client-Secret: $CF_ACCESS_SECRET" | python3 -m json.tool | head -40
```

If you get `"status": "success"` and some log lines back, you are in. If you get
an HTML login page or a 403, the token is wrong or not yet active.

## What streams exist

| Tenant | Selector | What it is |
|--------|----------|------------|
| `tumbao` | `{app="tumbao"}` | tumbao.ch Worker runtime: every request, cron, admin action |
| `tumbao` | `{app="tumbao-insta-monitor"}` | the Instagram monitor sister Worker |
| `default` | `{service="llm-gateway"}` | one row per LLM request: spend, tokens, model, agent |
| `default` | `{service="agent-outcome"}` | one row per task result: accepted, blocked, pr_url |

The browser view of the same data is Grafana at
`https://grafana-rumba.statsbox.ch` (Google login with the team account).

## Reading: LogQL by example

Recent Worker activity:

```logql
{app="tumbao"}
```

One request, end to end, by its run id (see skill 02 for where run ids come
from). The run id lives in the log body, not in a label:

```logql
{app="tumbao"} |= "20260529-ab12"
```

Only errors in the last hour:

```logql
{app="tumbao", level="error"}
```

Count requests by a body field (parse the JSON body, then aggregate):

```logql
sum by (actor_bucket) (count_over_time({app="tumbao"} | json [1h]))
```

Did my new funnel event start firing after I shipped?

```logql
sum(count_over_time({app="tumbao"} | json | event="cta_click" [6h]))
```

## How to find what you need

1. Start broad with the stream selector (`{app="tumbao"}`), narrow with `|=` and
   `| json | field="value"`.
2. Labels are for low cardinality only (`app`, `env`, `level`). Everything
   high cardinality (run id, handle, user id, slug) is in the JSON body, so you
   filter it with `| json | field="..."`, not with `{...}`.
3. If you cannot find a field, it probably was not logged. That is a gap to fix
   in the code, see skill 02. Read the data first, change the code second.
