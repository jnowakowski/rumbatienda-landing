# Skill: instrument first

Load this when you are writing or changing code. Before you ship, decide what
the change should log, so that afterward you can read the data and prove it
worked. Code without observability is a guess we cannot check.

The rule: **if a change matters, it must be visible in Loki.** A new feature
that produces no log line is a feature you cannot reason about in production.

## The pattern we already use

The canonical implementation is `tumbao.ch/src/observability.ts`. Read it once.
The shape is:

1. Every request gets a `runId` of the form `YYYYMMDD-HHMMSS-XXXX`.
2. The same `runId` goes into the HTTP response headers and into every log line
   for that request. So you can take a run id from a response and replay the
   whole request in Loki.
3. Log at the start, at each meaningful decision, and at the end.
4. Push the batch to Loki at the end of the request, and never let a logging
   failure break the request (fail open).

```ts
const logger = new RequestLogger(request, env, ctx);
logger.info("intake_received", { source: "whatsapp" });
// ... work ...
logger.info("intake_published", { event_id });
await logger.pushToLoki();        // batch push, fail open
return new Response(body, { headers: { ...logger.responseHeaders } });
```

## Label discipline (do not break the index)

```
Labels (low cardinality only):  app, env, level, pathname
Body (everything else):         runId, event, ids, slugs, handles, counts, durations
```

High cardinality values in labels destroy the Loki index. Run ids, user ids,
and slugs always go in the JSON body and are queried with `| json | field=...`.

## Instrument for the goal, not just for errors

Error logs tell you when something broke. They do not tell you whether a change
moved the outcome you care about. So for any change that is supposed to affect a
business result, log the event that proves it.

Ask yourself: what is the goal of this change, and what single log event, if it
starts appearing, shows the goal is being reached? Then log that event with the
fields needed to count it.

Examples of goal events:

```
cta_click           a visitor clicked the call to action you added
interest_submitted  the trip interest form was submitted
intake_published    an event went from raw message to public listing
```

With that in place, after you ship you can answer "did it work" from skill 01,
for example `sum(count_over_time({app="tumbao"} | json | event="cta_click" [24h]))`,
instead of asking a human or guessing.

## Checklist before you ship a change

- Does the change emit a log line proving it ran?
- If the change targets an outcome, is there a countable goal event?
- Are all high cardinality values in the body, not in labels?
- Can you trace this run by its run id?
- Did you write down the LogQL query you will use to check it (so future you,
  or the reviewer, can verify)?
