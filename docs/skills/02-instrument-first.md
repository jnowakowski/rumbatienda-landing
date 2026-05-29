# Skill: instrument first

Load this when you are writing or changing code. Before you ship, decide what
the change should log, so that afterward you can read the data and prove it
worked. Code without observability is a guess we cannot check.

The rule: **if a change matters, it must be visible in Loki.** A new feature
that produces no log line is a feature you cannot reason about in production.

## The pattern already in your repo

The rumba.rumbatienda.com repo (`rumba-site`) already ships logs to Loki. Read
these two files once:

- `src/lib/loki.ts` is the `RequestLogger`: a per-request buffer with `log()`
  and `flush()`, pushing one Loki stream `{service="rumba", env="production"}`.
- `src/middleware.ts` creates a `RequestLogger` per request and flushes it after
  the response, so there is no shared global buffer and no cross-request
  contamination.

The shape is:

1. Middleware makes a logger per request and attaches it to `locals`.
2. Your handler calls `logger.log({ level, msg, ... })` at the start, at each
   meaningful decision, and at the end. A `request_id` ties those lines together.
3. The logger flushes the batch to Loki after the response, and a logging
   failure never breaks the request (it aborts after 2s and swallows the error).

```ts
import { getLogger } from "./lib/loki";
const logger = getLogger(locals);
logger.log({ level: "info", msg: "intake_received", source: "whatsapp" });
// ... work ...
logger.log({ level: "info", msg: "intake_published", event_id });
```

Use `getLogger(locals)` inside request handlers. For background work, construct a
`RequestLogger` and `flush()` it yourself, the way `whatsapp-compiler.ts` does.

## Label discipline (do not break the index)

```
Labels (low cardinality only):  service, env, level
Body (everything else):         request_id, msg, ids, slugs, handles, counts, durations
```

High cardinality values in labels destroy the Loki index. Request ids, event
ids, and slugs always go in the JSON body and are queried with
`| json | field=...`.

## Instrument for the goal, not just for errors

Error logs tell you when something broke. They do not tell you whether a change
moved the outcome you care about. So for any change that is supposed to affect a
business result, log the event that proves it.

Ask yourself: what is the goal of this change, and what single log line, if it
starts appearing, shows the goal is being reached? Then log it with the fields
needed to count it.

Examples of goal events (the `msg` field):

```
cta_click           a visitor clicked the call to action you added
share_click         someone shared an event link (rumba already logs these)
intake_published    an event went from raw WhatsApp message to public listing
```

With that in place, after you ship you can answer "did it work" from skill 01,
for example `sum(count_over_time({service="rumba"} | json | msg="cta_click" [24h]))`,
instead of asking a human or guessing.

## Checklist before you ship a change

- Does the change emit a log line proving it ran?
- If the change targets an outcome, is there a countable goal event?
- Are all high cardinality values in the body, not in labels?
- Can you trace this request by its `request_id`?
- Did you write down the LogQL query you will use to check it, so the reviewer
  can verify too?
