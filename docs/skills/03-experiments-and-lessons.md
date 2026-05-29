# Skill: experiments and lessons

Load this when a change is really a bet on an outcome, which is most changes
that touch copy, pricing, layout, or a funnel step. The team treats these as
experiments, not as one way edits. This skill also covers how we catch our own
blind spots and how we capture what we learn.

## Frame the change as an experiment

Before writing code, write four lines. They fit in the PR description or the
ticket:

```
Hypothesis: changing X will increase Y.
Metric:     the LogQL query (skill 01) that measures Y.
Instrument: the goal event I will add (skill 02) so Y is countable.
Decision:   what result would make us keep, change, or revert this.
```

If you cannot name the metric, you are not ready to ship. A change you cannot
measure is a change you cannot learn from.

## Observe, then conclude

After the change is live, read the metric (skill 01). Give it enough time and
traffic to mean something. Then write the conclusion. Do not delete the
experiment from memory by moving on silently.

## Capture the lesson in git

We keep what we learn in the repo, not in private chat. Two surfaces:

- The commit body, for the lesson tied to a specific change. State what you
  expected, what the data showed, and what you decided. Keep the subject line
  short, put the lesson in the body.
- A ticket under `docs/tickets/`, for anything that needs follow up or that the
  team should weigh in on. One ticket is one Markdown file, append updates to
  it. See `docs/team-agent-workflow.md`.

A good lesson reads like: "Expected the new CTA to lift interest_submitted.
Over 5 days it did not move while cta_click rose, so the drop is on the form,
not the button. Next: instrument the form steps."

## Catch your own blind spots

The failure mode for an agent is confident guessing. Guard against it:

- When you state a fact about production, cite the data. If you have not read
  it, say "I have not checked" instead of asserting.
- A function name, a flag, or a field in a memory or an old doc is a claim that
  it existed then, not now. Verify it in the current code before relying on it.
- If the first attempt can fail, make sure the second attempt can read the
  intel from the first in Loki, rather than reproducing from zero. Engineer for
  failure.

## Ask the human well

Some answers only Julian has: what he wants, what a venue meant, whether a price
is final. When you hit one of those, do not invent an answer and do not stall.
Ask one clear question in the format the team uses (`docs/team-agent-workflow.md`):

```
Context: what you were trying to do.
Evidence: the query, preview URL, or file path.
Question: the one decision you need.
Recommendation: what you think should happen next.
```

You can also turn this around: when you read something useful in the data, tell
Julian. "Most interest form submissions come from the German pages" is the kind
of observation that helps him decide where to push next. Advising on the data is
part of the job, not only writing the code.
