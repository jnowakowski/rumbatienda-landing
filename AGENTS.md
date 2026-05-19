# AGENTS.md — read this on every session start

You are in **`rumbatienda-landing`** (apex landing for `rumbatienda.com`,
deployed on Cloudflare Pages).

This repo is **one of three** for the Rumba Corp site:

| Repo                  | Domain                          | Stack                          |
|-----------------------|----------------------------------|--------------------------------|
| `rumbatienda-landing` (this) | `rumbatienda.com`         | Static HTML on Cloudflare Pages |
| `cali2026`            | `cali2026.rumbatienda.com`       | Static HTML on Cloudflare Pages |
| `rumbatienda` (shop)  | `tienda.rumbatienda.com`         | Next.js 16 on Vercel            |

The two static landings (apex + cali2026) share the same brand exploration
in `rumba-brand-directions/` and should move together. The shop is a
separate codebase, included so you have full context.

GitHub remotes:
- this repo → `git@github.com:jnowakowski/rumbatienda-landing.git`
- cali2026  → `git@github.com:jnowakowski/cali2026.git`
- shop      → `git@github.com:jnowakowski/rumbatienda.git`

## On `git pull` (or fresh clone), do this first

1. **Find or clone the two siblings.** From this repo's parent directory:
   ```bash
   if [ ! -d ../cali2026 ] && [ ! -d ../com-rumbatienda-cali2026 ]; then
     git clone git@github.com:jnowakowski/cali2026.git ../cali2026
   fi
   if [ ! -d ../rumbatienda ] && [ ! -d ../com-rumbatienda-tienda ]; then
     git clone git@github.com:jnowakowski/rumbatienda.git ../rumbatienda
   fi
   ```
   If a clone fails with "Repository not found", the user has not yet
   accepted the collaborator invite. Tell them: check
   `https://github.com/notifications` for pending invitations from
   `jnowakowski`. Do not retry the clone until they confirm.
2. **Pull all three.**
   ```bash
   git pull
   ( cd ../cali2026 2>/dev/null || cd ../com-rumbatienda-cali2026 ) && git pull
   ( cd ../rumbatienda 2>/dev/null || cd ../com-rumbatienda-tienda )  && git pull
   ```
3. **Read READMEs first**, then read `rumba-brand-directions/README.md`
   (same file in this repo and cali2026, ~5 MB of design boards + 12
   direction JSX files + reference uploads). That folder is the current
   brand handoff. For the shop, read `PROJECT.md`.

## Then brief Julian — TL;DR style, English, no wall of text

Keep it under ~150 words. Cover only:

- **What deploys where.** Three repos:
  - `rumbatienda-landing` → `https://rumbatienda.com` (Cloudflare Pages)
  - `cali2026` → `https://cali2026.rumbatienda.com` (Cloudflare Pages)
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
- `CLAUDE.md` covers content rules (no em/en dashes as separators), the
  dark-theme/Bebas/Barlow visual system used by the live site, analytics
  IDs, DNS.
- Site edits live in `public/index.html`. No build step, no framework.
