# AGENTS.md — read this on every session start

You are in **`rumbatienda-landing`** (apex landing for `rumbatienda.com`,
deployed on Cloudflare Pages).

Julian and Julian's Codex must first read
[`JULIAN-START-HERE.md`](JULIAN-START-HERE.md). It is the canonical cross repo
map and explains autonomous deployment plus the Colombia and Switzerland
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

## Then brief Julian — TL;DR style, English, no wall of text

Keep it under ~150 words. Cover only:

- **What deploys where.** Four repos:
  - `rumbatienda-landing` → `https://rumbatienda.com` (Cloudflare Pages)
  - `cali2026` → `https://cali2026.rumbatienda.com` (Cloudflare Pages)
  - `rumba-site` → `https://rumba.rumbatienda.com` (Cloudflare Workers)
  - `rumbatienda` → `https://tienda.rumbatienda.com` (Next.js, Vercel)
- **What's new.** `rumba-brand-directions/` was just added to apex + cali2026.
  10 design directions, 25 logo variants across two Logo Lab boards,
  reference uploads (current AI logo, current landing/trip pages, Feria
  de Cali ’68 captures). Open `index.html` for the pan/zoom canvas, or
  `Rumba Brand Directions.html` for the offline standalone bundle.
- **The open question.** The 10 directions are mostly typographic; they
  lack Colombian iconography (dancer, sun, palms, drums). See "OPEN
  QUESTION" in `rumba-brand-directions/README.md`.
- **Pick one to start.** (a) review the 10 directions, (b) build a test
  board with illustrative iconography, or (c) pick a wordmark from Logo
  Lab v2.

Stop. Wait for Julian to choose. Do not dump plans.

## Other context

- `README.md` covers the ship workflow (PR → Cloudflare Pages preview →
  squash-merge → production).
- `docs/agent-deploy-handoff.md` is the quick recovery note for agents who
  are unsure which repo or deploy target they are in.
- `CLAUDE.md` covers content rules (no em/en dashes as separators), the
  dark-theme/Bebas/Barlow visual system used by the live site, analytics
  IDs, DNS.
- Site edits live in `public/index.html`. No build step, no framework.

## Working through data (load on demand)

`docs/skills/` holds a small set of internal skills on how the team works
through data, not guesses: reading production logs in Loki, instrumenting code
before shipping, running changes as measurable experiments, and the API
convention. Do not read them every session. Open `docs/skills/README.md` and
load one skill when the task matches it. Reading the data needs a Cloudflare
Access token delivered out of band, see `docs/skills/01-read-the-data.md`.
