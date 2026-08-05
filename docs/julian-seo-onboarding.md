# Julian SEO onboarding

This is the one starting point for Julian and Julian's Codex. It grants the
working model, not Google or infrastructure ownership: read the shared data,
change the correct repo, merge your own green PR, and let the maintained
workflow deploy production.

## Access already assigned

| Surface | Account | Access |
|---|---|---|
| GitHub, all four repos | `ojvillac@gmail.com` | Write |
| Search Console | `ojvillac@gmail.com` | Full user on `sc-domain:rumbatienda.com` |
| Google Analytics | `ojvillac@gmail.com` | Analyst on property `517107083` |

Full Search Console access and Analyst Analytics access are enough for normal
SEO work. Do not create another Search Console property, verification token,
Analytics property, or measurement ID.

## First machine setup

Authenticate GitHub and clone the four repositories:

```bash
gh auth login
mkdir -p rumba-seo && cd rumba-seo
gh repo clone jnowakowski/rumbatienda-landing
gh repo clone jnowakowski/cali2026
gh repo clone jnowakowski/rumba-site
gh repo clone jnowakowski/rumbatienda
```

Install the Google Cloud CLI, then create local Application Default
Credentials with Julian's Google account. These credentials stay on Julian's
machine and authorize read only Analytics and Search Console access:

```bash
gcloud auth application-default login \
  --scopes="https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/webmasters.readonly"
```

Never copy the generated credential file into a repo, PR, issue, chat, or
agent prompt. Revoke it from the same machine with:

```bash
gcloud auth application-default revoke
```

Verify both APIs from the apex repo:

```bash
cd rumbatienda-landing
./scripts/google-seo-access-check.sh
```

The check must show Analytics rows for property `517107083` and confirm that
`sc-domain:rumbatienda.com` is available. A child URL prefix property is not a
substitute.

## Repo and deploy map

| Production | Repository | Required local check | Production deploy |
|---|---|---|---|
| `rumbatienda.com` | `rumbatienda-landing` | local static preview | merge green PR, Cloudflare Pages workflow |
| `cali2026.rumbatienda.com` | `cali2026` | `npm test && npm run verify:site:server` | merge green PR, Cloudflare Pages workflow |
| `rumba.rumbatienda.com` | `rumba-site` | `make build` | merge green PR, Cloudflare Workers workflow |
| `tienda.rumbatienda.com` | `rumbatienda` | `npx tsc --noEmit` | merge green PR, Vercel workflow |

Julian does not wait for Janusz to approve or merge a normal SEO PR. Branch
protection requires a PR and the repository's automated checks, with zero
human approvals required. When the checks are green, Julian or Julian's agent
may squash merge the PR. The merge to `main` starts production deployment.

Use the GitHub Actions page or these commands to inspect and retry a deploy:

```bash
gh run list --limit 5
gh run view RUN_ID --log-failed

# Rumba Worker
gh workflow run deploy.yml --repo jnowakowski/rumba-site

# Tienda Vercel deploy
gh workflow run vercel-production.yml --repo jnowakowski/rumbatienda
```

Cloudflare and Vercel secrets are held by GitHub environments. Julian does not
need dashboard access or a local production token.

## Normal SEO loop

1. Pull all four repos and identify the exact production URL to improve.
2. Query `sc-domain:rumbatienda.com`, filtered by page hostname.
3. Query GA4 property `517107083`, filtered by `hostName` and page path.
4. Read the target repo's `AGENTS.md`, README, current metadata, robots rules,
   sitemap, redirects, structured data, and analytics code.
5. Create a focused branch and make the smallest change in the repo serving
   that URL.
6. Run the repo's checks, push, and open a PR with target URLs, expected search
   behavior, and evidence.
7. Wait for green CI, inspect the preview where available, then squash merge
   the PR yourself.
8. Watch the production deploy and verify the live status, canonical URL,
   indexability, sitemap membership, structured data, and tracking code.
9. Record any manual Search Console action in the PR.

Read [`seo-workflow.md`](seo-workflow.md) for the shared property rules,
language SEO, measurement plan, and incident history.

## Boundaries

Normal self service work includes metadata, content, internal links, canonical
tags, `hreflang`, structured data, robots rules, sitemaps, analytics events,
PR merge, deploy retry, and production verification.

Stop and coordinate before changing DNS, Search Console ownership or users,
verification files or tags, GA4 property administration, measurement IDs,
Cloudflare/Vercel credentials, payment configuration, or production data.

## First assignment

Produce a 90 day baseline for all four hosts from the canonical GSC property
and GA4 property. For each host include clicks, impressions, CTR, average
position, sessions, users, top landing pages, top queries, and the next three
SEO opportunities. Commit the report under `docs/seo/` in the repo whose work
it proposes. Do not change ownership or create new properties while producing
the baseline.
