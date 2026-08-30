# AGENTS.md — read this on every session start

You are in **`rumbatienda-landing`** (apex landing for `rumbatienda.com`,
deployed on Cloudflare Pages).

Julian and Julian's Codex must first read
[`JULIAN-START-HERE.md`](JULIAN-START-HERE.md). It is the canonical cross repo
map and explains review-gated deployment plus the Colombia and Switzerland
boundary.

This repo is **one of four** for the Rumba Corp site:

| Repo                  | Domain                          | Stack                          |
|-----------------------|----------------------------------|--------------------------------|
| `rumbatienda-landing` (this) | `rumbatienda.com`         | Static HTML on Cloudflare Pages |
| `cali2026`            | `cali2026.rumbatienda.com`       | Static HTML on Cloudflare Pages |
| `rumba-site`          | `rumba.rumbatienda.com`          | Astro on Cloudflare Workers      |
| `rumbatienda` (shop)  | `tienda.rumbatienda.com`         | Next.js 16 on Vercel            |

The two static landings (apex + cali2026) share the same brand exploration
in `rumba-brand-directions/` and should move together. The shop is a
separate codebase, included so you have full context.

GitHub remotes:
- this repo → `git@github.com:jnowakowski/rumbatienda-landing.git`
- cali2026  → `git@github.com:jnowakowski/cali2026.git`
- rumba     → `git@github.com:jnowakowski/rumba-site.git`
- shop      → `git@github.com:jnowakowski/rumbatienda.git`

## On `git pull` (or fresh clone), do this first

0. **Read the Julian start guide.** Open
   [`JULIAN-START-HERE.md`](JULIAN-START-HERE.md), then continue here.
1. **Read the team workflow.** Start with
   [`docs/team-agent-workflow.md`](docs/team-agent-workflow.md). It explains
   how Julian, Julian's Codex, and the Rumba team coordinate through git.
2. **Read the deploy handoff.** Then read
   [`docs/agent-deploy-handoff.md`](docs/agent-deploy-handoff.md). It tells
   you the canonical repo, deploy target, and what not to look for.
3. **Read the SEO workflow when the task affects search or analytics.** Use
   [`docs/seo-workflow.md`](docs/seo-workflow.md) before changing Search
   Console, Analytics, robots rules, sitemaps, canonical URLs, language URLs,
   or structured data.
   New team members start with
   [`docs/julian-seo-onboarding.md`](docs/julian-seo-onboarding.md).
4. **Find or clone the three siblings.** From this repo's parent directory:
   ```bash
   if [ ! -d ../cali2026 ] && [ ! -d ../com-rumbatienda-cali2026 ]; then
     git clone git@github.com:jnowakowski/cali2026.git ../cali2026
   fi
   if [ ! -d ../rumbatienda ] && [ ! -d ../com-rumbatienda-tienda ]; then
     git clone git@github.com:jnowakowski/rumbatienda.git ../rumbatienda
   fi
   if [ ! -d ../rumba-site ] && [ ! -d ../com-rumbatienda-rumba ]; then
     git clone git@github.com:jnowakowski/rumba-site.git ../rumba-site
   fi
   ```
   If a clone fails with "Repository not found", sibling access is missing.
   That is not permission to change deploy, DNS, or hosting. Continue in the
   repo you already have, leave a short handoff note if the missing repo blocks
   the task, and tell Julian to check `https://github.com/notifications` for
   pending invitations from `jnowakowski`.
5. **Pull all four.**
   ```bash
   git pull
   ( cd ../cali2026 2>/dev/null || cd ../com-rumbatienda-cali2026 ) && git pull
   ( cd ../rumbatienda 2>/dev/null || cd ../com-rumbatienda-tienda )  && git pull
   ( cd ../rumba-site 2>/dev/null || cd ../com-rumbatienda-rumba )    && git pull
   ```
6. **Read READMEs first**, then read `rumba-brand-directions/README.md`
   (same file in this repo and cali2026, ~5 MB of design boards + 12
   direction JSX files + reference uploads). That folder is the current
   brand handoff. For the shop, read `PROJECT.md`.

## Orient to the current task

Do not replay a fixed brand-review briefing at session start. Read the current
issue, PR, recent commits, and the requested repo first. Brief Julian only on
facts needed for the task in front of him. `rumba-brand-directions/` is design
history and reference material, not an automatic next action.

## Other context

- `README.md` covers the ship workflow (PR → Cloudflare Pages preview →
  squash-merge → production).
- `docs/agent-deploy-handoff.md` is the quick recovery note for agents who
  are unsure which repo or deploy target they are in.
- `CLAUDE.md` covers content rules (no em/en dashes as separators), the
  dark-theme/Bebas/Barlow visual system used by the live site, analytics
  IDs, DNS.
- Stay inside that visual system. Display is Bebas Neue. Body, UI labels, and
  chrome are Barlow Condensed. Do not add DM Sans, Space Mono, or any second
  body or mono font unless a task explicitly asks for a brand change.
- The first HTML this page returns is German (`html lang="de"`), because the
  audience is DACH. A language switcher is visitor UX on one canonical URL.
  Do not change that default and do not treat `?lang=` as an SEO scheme.
  Read `docs/seo-workflow.md` before changing language URLs.
- Site edits live in `public/index.html`. No build step, no framework.
- Shop deploys are a separate Vercel exception. Do not request Vercel team
  access. Read `jnowakowski/rumbatienda` `AGENTS.md` before shop deploy work.

## Image rights before publication

A screenshot, source-page URL, or statement that an image was "provided by the
user" is not evidence of publication rights. Before adding a new photograph,
record the exact file, copyright owner or photographer, source, license or
written authorization, and required attribution in the repository's image
credits file.

Written authorization must identify the files and permit Rumba Corp to publish
them commercially on its websites and social channels, including crops and
other edits. If identifiable people are central to a commercial image, also
record the relevant consent or release. If this evidence is missing, do not add
the image as "authorization pending". Keep an already licensed or owned asset
instead.

## GitHub review before merge

Julian's Codex must not squash-merge its own pull requests.

After CI is green and the preview is recorded on the PR:

1. Request a GitHub review from `jnowakowski` on that same PR.
   `gh pr edit --add-reviewer jnowakowski`
2. Comment on the GitHub PR with the preview URL and what to look at.
3. Wait until a review from `jnowakowski` exists on the GitHub PR.
4. Only then may the PR be squash-merged.

Do not treat a chat, WhatsApp, or local "looks good" as a review. The review
has to be on GitHub. If the reviewer has not responded, wait. Do not merge.

## Working through data (load on demand)

`docs/skills/` holds a small set of internal skills on how the team works
through data, not guesses: reading production logs in Loki, instrumenting code
before shipping, running changes as measurable experiments, and the API
convention. Do not read them every session. Open `docs/skills/README.md` and
load one skill when the task matches it. Reading the data needs a Cloudflare
Access token delivered out of band, see `docs/skills/01-read-the-data.md`.
