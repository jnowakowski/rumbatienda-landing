# rumbatienda.com

Apex landing page for the Rumba Corp ecosystem. Single hand-coded HTML page
that routes visitors to Tienda (shop) and Rumba Medellín (events). No
framework, no build step.

## Where things live

- **This repo** → `rumbatienda.com` (apex landing, Cloudflare Pages)
- **Sibling repo** [`jnowakowski/cali2026`](https://github.com/jnowakowski/cali2026)
  → `cali2026.rumbatienda.com` (Feria de Cali ’26 trip landing)
- **Shop** [`jnowakowski/rumbatienda`](https://github.com/jnowakowski/rumbatienda)
  → `tienda.rumbatienda.com` (Next.js on Vercel)

The apex and cali2026 landings share `rumba-brand-directions/` (brand
exploration handoff, ~5 MB) and should be reviewed together.

**Julian and Julian's Codex:** start with
[`JULIAN-START-HERE.md`](JULIAN-START-HERE.md). It contains the complete map
from public URLs to repositories, autonomous deployment rules, and the boundary
between the Colombia and Switzerland work.

**Agents:** then read [`AGENTS.md`](AGENTS.md). It covers sibling-repo pickup
and how to brief Julian.
If you are blocked on deploy or repo identity, read
[`docs/agent-deploy-handoff.md`](docs/agent-deploy-handoff.md).
Before SEO, Search Console, or Analytics work, read
[`docs/seo-workflow.md`](docs/seo-workflow.md).
For the first SEO session, continue with
[`docs/julian-seo-onboarding.md`](docs/julian-seo-onboarding.md).

## Quick start (human or agent)

The whole site is in `public/index.html`. Edit it directly.

```bash
python3 -m http.server 4321 -d public
# open http://localhost:4321
```

## Ship a change

1. `git checkout -b feature/<thing>`
2. Edit `public/index.html`, commit
3. `git push -u origin feature/<thing>`
4. Open a PR (`gh pr create` or GitHub UI). CI builds a Cloudflare Pages
   preview and posts the URL as a sticky comment on the PR.
5. When you are happy with the preview, squash-merge the PR. That deploys
   to production at https://rumbatienda.com.

## Rules of the road

- Direct push to `main` is blocked. All changes go through PRs.
- Normal green PRs require zero human approvals. Configuration and deploy
  changes deserve extra scrutiny in the PR, but Julian or his agent may merge
  them after all required checks pass.
- The production Cloudflare token is environment-scoped and only available
  to deploys on `main`. Feature branches use a separate preview token.

## Read before changing visuals

`CLAUDE.md` has the brand section: dark theme (`#0A0A0E`), display font
Bebas Neue, body Barlow Condensed, salsa accents (yellow `#FCD116`, pink
`#FF4D8D`, cyan `#00CCCC`). Stay inside the system.

Plus project conventions: no em/en dashes as text separators, analytics IDs
(GA4, Matomo, CF Web Analytics), DNS notes.

## For agents specifically

- There is no src/, no node build, no framework. If you see references to
  Astro components or `src/pages/`, that history was removed in a recent
  cleanup and is not coming back.
- Keep normal site edits inside `public/`. If configuration must change, make
  it in a focused PR, wait for every required check, and merge only when green.
- DNS records for subdomains (`tienda.`, `rumba.`, `cali2026.`, `og.`,
  `mta-sts.`) live in the same Cloudflare zone but are managed elsewhere.
  Do not modify them from this repo.
