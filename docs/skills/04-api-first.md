# Skill: API first

Load this when you add or change an HTTP endpoint in a Rumba Worker. We design
endpoints so that an LLM agent can consume and self debug them from the response
alone, without a human in the loop. This is a convention for new endpoints, we
do not rewrite existing ones unless we are already refactoring them.

## Three headers on every response

```
X-Docs:          URL to this endpoint's contract
X-Trace-Id:      the run id for Loki lookup, same value as X-Run-Id
X-Help-On-Error: URL to a troubleshooting page
```

The trace id is the bridge to skill 01: a caller that gets a confusing response
can take `X-Trace-Id` and read the full run in Loki.

## Status in the body, not in the HTTP code

```
HTTP 200 always, when the Worker handled the request.
The body carries the real result.
```

```jsonc
{
  "ok": false,
  "errors": [{ "code": "RATE_LIMITED", "message": "..." }],
  "trace": {
    "status": 429,
    "headers": { "...": "subset" },
    "body_preview": "...",
    "sha256": "..."
  }
}
```

Rules:

- `ok: boolean` is the operation result. `errors: []` lists what went wrong.
- `5xx` is only for "the Worker did not run the handler". Never use
  `400 / 401 / 403 / 429` for business logic outcomes. Those go in
  `ok: false, errors: [...]`.
- `trace: {}` carries upstream response details (status, a subset of headers, a
  body preview, a sha256) so a second run can read the artifact from Loki or R2
  instead of reproducing the call from zero.

## Why

The first attempt can always fail. The second attempt must have all the intel
from the first one in the logs and artifacts, so it can reason instead of
repeating blindly. Engineer for failure.

Document each endpoint's contract in `docs/headers.md` of the repo that adopts
this convention. The `X-Docs` and `X-Help-On-Error` URLs must resolve in both
local dev and production, the simplest way is to have the Worker serve `/docs/*`
from embedded markdown.
