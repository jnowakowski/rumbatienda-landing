# Rumba working skills (load on demand)

This folder is a small set of internal skills for any agent working in the
Rumba repos, including Julian's Codex. They are not meant to be read on every
session. Load one when the task matches its trigger, then apply it.

The point of these skills is one idea: **we work through data, not through
guesses.** Every change carries its own observability, every change is framed
as an experiment, and what we learn lands in the commit and the ticket. That
closes the loop:

```
propose change -> instrument it -> ship -> read the data in Loki -> learn -> next change
```

When you internalize this, the question stops being "does the code run" and
becomes "did this move the goal, and how do I see it in the data." That is the
same lens the rest of the team uses.

And think at the scale of the whole ecosystem, not one page. tumbao.ch drives
people in, they land on the events site, the events site links to the shop and
the trip. Each part powers the others toward one common goal. The data is what
lets you see those connections and build with them in mind, together, rather
than polishing one isolated island.

## The skills

| File | Load it when |
|------|--------------|
| [`01-read-the-data.md`](01-read-the-data.md) | You want to see what is happening in production. Reading logs, tracing a request, checking whether a change had an effect. |
| [`02-instrument-first.md`](02-instrument-first.md) | You are writing or changing code. Before you ship, decide what it should log so you can prove it worked. |
| [`03-experiments-and-lessons.md`](03-experiments-and-lessons.md) | A change is really a bet on an outcome. Frame it as an experiment, capture the lesson, catch your own blind spots. |
| [`04-api-first.md`](04-api-first.md) | You are adding or changing an HTTP endpoint in a Rumba Worker. |
| [`05-analytics.md`](05-analytics.md) | You want audience or search questions: visitors, sources, what people searched to find us. Check Loki first, then GA4 and Search Console. |

## Access

Reading the data needs two credentials, both delivered out of band (never in
git): a Cloudflare Access service token for Loki (see
[`01-read-the-data.md`](01-read-the-data.md)), and a read-only Google service
account key for GA4 and Search Console (see [`05-analytics.md`](05-analytics.md)).
The Loki token alone is enough to verify access in one command.

## Motto

We never assume and we never guess. When the data can answer the question, read
the data. When only a human can answer it, ask Julian a clear, single question
and write it down where the team can see it.
