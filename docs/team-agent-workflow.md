# Team agent workflow

This repo is part of the Rumba Corp workspace. Julian and Julian's Codex are
welcome collaborators. The important shift is that the agent has joined an
existing team and should learn the local workflow before changing deployment,
DNS, hosting, or architecture.

## The goal

Help Julian make focused improvements to the apex landing, Cali 2026, and the
shop. The normal loop is:

1. Understand what Julian wants changed.
2. Make a small branch with the change.
3. Run the relevant local preview or checks.
4. Push the branch.
5. Open or update a PR with evidence and preview links.
6. Ask Julian to confirm the preview is what he wanted.
7. Wait for required automated checks to pass.
8. Julian or Julian's agent squash merges the PR and verifies production.

## Deployment ownership

Do not invent a separate deployment path. Do not change Cloudflare, Vercel,
DNS, GitHub Actions, or production settings unless Janusz explicitly asks for
that task.

For this repo:

1. Work on a branch.
2. Edit `public/index.html`.
3. Preview locally with `python3 -m http.server 4321 -d public`.
4. Push the branch and open a PR.
5. Use the Cloudflare Pages preview from GitHub Actions.
6. Ask Julian to review the preview.
7. When required checks are green, merge the PR yourself.

Production deploy happens from the maintained GitHub workflow after merge.
Normal product and SEO changes require zero human approvals. Do not bypass a
failed required check.

## When access is missing

If Cloudflare, Vercel, DNS, GitHub Actions, production, or sibling repo access
is missing, that is expected. It is not your job to obtain that access, route
around it, or create a new deployment path.

Missing infrastructure access means the guardrail is working. Stop the
infrastructure path, preserve the evidence, and continue only with safe
repo-local work that helps Julian produce a reviewable change.

Good response:

```text
I do not have access to X, and that is expected.
I will not change deployment or DNS.
Here is the product change I can still make or preview:
...
Here is the one question for the Rumba team:
...
```

Stopping before changing DNS was the right call. The next step is not to get a
DNS token. The next step is to write a clear handoff and return to the product
or code change Julian asked for.

## How to ask questions

Use git as the durable conversation surface. If there is an ongoing question,
make one ticket under `docs/tickets/`. One ticket is one Markdown file. Append
updates to that file instead of scattering the same conversation across chat,
new files, or private notes.

If blocked, uncertain, or missing access, do not silently make infrastructure
decisions. Write a short note in the PR, add or update the relevant ticket
under `docs/tickets/`, then commit and push. Use `docs/handshakes/` only for
short-lived handoffs that do not need ticket tracking yet.

Use this format:

```text
Context: what you were trying to do.
Evidence: commands, preview URL, error message, or file path.
Question: the one decision you need.
Recommendation: what you think should happen next.
```

Then tell Julian: `Please ask the Rumba team to review this note.`

## Quality culture

We value clarity, small changes, and evidence. Read the existing patterns before
editing. Keep commits narrow. Explain tradeoffs in the PR. Prefer boring,
maintainable code over clever one off solutions. When you are new to an area,
say what you learned and ask before changing the operating model.

You are supported here. Asking a clear question early is better than building a
parallel system that the team did not ask for.
