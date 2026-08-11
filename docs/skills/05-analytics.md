# Skill: analytics (GA4 and Search Console)

Load this when you want audience and search questions: how many visitors, from
where, on which pages, what people searched to find us.

## First, Loki probably already answers it

Our own logs (skill 01) already capture most of what Google Analytics would tell
you, in real time and per request: country and city, referrer, UTM parameters,
device and browser, path, and an actor classification (real user vs bot vs
crawler vs social preview). So before reaching for GA4, ask whether a LogQL
query over `{service="rumba"}` already answers the question. It usually does, and
it is faster and fully under our control.

Use GA4 and Search Console for what Loki does not have:

- GA4: sessions, returning vs new users, engagement time, conversions modeled
  over time, the standard funnel reports.
- Search Console: what queries surface us in Google, impressions, clicks,
  average position, which pages rank. This is the SEO view, Loki cannot see it
  because it is Google side.

## Access

Preferred path: the org SEO tooling documented in `brain/seo/PLAYBOOK.md`
(workspace root). The MCP servers there carry Full access to every GSC
property and Editor on every GA4 account, and
`brain/seo/scripts/mcp-client.sh` works from plain bash with no key handling.

If you instead use a raw Google service account key (delivered out of band,
never commit it), point `GOOGLE_APPLICATION_CREDENTIALS` at the JSON file and
use the CURRENT identifiers:

```
GA4 property (Rumbatienda CO, unified): 517107083   measurement id G-2K3BYEMTTQ
GSC property:                           sc-domain:rumbatienda.com
```

Legacy note: property `Rumba` (531153655, `G-2D2GBD8R7D`) stopped receiving
data on 2026-08-11 when the last dual-tracking tag was removed from
rumba-site. It only holds history from before 2026-05-05 to 2026-08-11.

Endpoints:

```
GA4 Data:  POST https://analyticsdata.googleapis.com/v1beta/properties/517107083:runReport
GSC:       POST https://searchconsole.googleapis.com/webmasters/v3/sites/<site>/searchAnalytics/query
```

Authenticate the service account to a bearer token with the Google auth library
(scopes `analytics.readonly` and `webmasters.readonly`), then call the endpoints
above. Example GA4 report body:

```json
{ "dateRanges": [{ "startDate": "7daysAgo", "endDate": "today" }],
  "dimensions": [{ "name": "country" }],
  "metrics": [{ "name": "activeUsers" }] }
```

## Think across the ecosystem

The point is not one number on one site. It is the flow. GA4 and Search Console
tell you where demand enters (search queries, referrals), Loki tells you what
people do once they arrive and how they move between tumbao.ch, the events site,
and the trip pages. Read them together: search and analytics for the top of the
funnel, Loki for the journey through it. We are building one system where each
part feeds the next, toward the same goal.
