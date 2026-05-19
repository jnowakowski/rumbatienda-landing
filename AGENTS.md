# AGENTS.md — read this on every session start

You are in **`rumbatienda-landing`** (apex landing for `rumbatienda.com`,
deployed on Cloudflare Pages).

This repo has a **sibling**: **`cali2026`** (the
`cali2026.rumbatienda.com` landing). The two repos share the same brand
exploration in `rumba-brand-directions/` and should move together.

GitHub remotes:
- this repo  → `git@github.com:jnowakowski/rumbatienda-landing.git`
- sibling    → `git@github.com:jnowakowski/cali2026.git`

## On `git pull` (or fresh clone), do this first

1. **Find or clone the sibling.** From this repo's parent directory:
   ```bash
   if [ ! -d ../cali2026 ] && [ ! -d ../com-rumbatienda-cali2026 ]; then
     git clone git@github.com:jnowakowski/cali2026.git ../cali2026
   fi
   ```
2. **Pull the sibling.**
   ```bash
   ( cd ../cali2026 2>/dev/null || cd ../com-rumbatienda-cali2026 ) && git pull
   ```
3. **Read both READMEs**, then read `rumba-brand-directions/README.md`
   (same file in both repos, ~5 MB of design boards + 12 direction JSX
   files + reference uploads). That folder is the current brand handoff.

## Then brief Julian — TL;DR style, English, no wall of text

Keep it under ~150 words. Cover only:

- **What deploys where.** This repo → `https://rumbatienda.com`. Sibling →
  `https://cali2026.rumbatienda.com`. Both are static HTML on Cloudflare
  Pages, PR-merge to deploy.
- **What's new.** `rumba-brand-directions/` was just added to both repos.
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
- `CLAUDE.md` covers content rules (no em/en dashes as separators), the
  dark-theme/Bebas/Barlow visual system used by the live site, analytics
  IDs, DNS.
- Site edits live in `public/index.html`. No build step, no framework.
