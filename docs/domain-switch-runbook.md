# Domain switch runbook: rumbatienda.com to rumbaexperience.co

Scope of this repo: the apex landing (`rumbaexperience.co`, formerly
`rumbatienda.com`). Subdomains switch in phases; tienda and cali2026 stay on
`rumbatienda.com` until their own repos move.

## Phases

1. **Phase 1 (this repo, 2026-10-20).** Production canonical, sitemap and
   robots use `rumbaexperience.co` / `www.rumbaexperience.co`. Outbound Rumba
   events links use `rumba.rumbaexperience.co`. Tienda and Cali 2026 links
   still point at `tienda.rumbatienda.com` and `cali2026.rumbatienda.com`.
   Sibling repos for rumba and og move on their own schedule. Cloudflare
   handles 301s from old apex/www/rumba/og hosts; do not add `_redirects` here.
2. **Later phases.** When tienda and cali2026 are ready, run
   `node scripts/switch-domain.mjs --scope=all` in this repo (or edit links
   manually) and switch those hosts in their owning repos.

## What is already prepared in this repo

* `<link rel="canonical" href="https://rumbaexperience.co/" />` in the head.
* `public/robots.txt` and `public/sitemap.xml` reference `rumbaexperience.co`
  with `lastmod` 2026-10-20 on the sole indexable URL.
* Analytics (GA4, CF Web Analytics, Matomo) load only on production hosts
  listed in `public/index.html`. The guard keeps both legacy and new apex hosts:
  `rumbatienda.com`, `www.rumbatienda.com`, `rumbaexperience.co`,
  `www.rumbaexperience.co`. Previews, `*.pages.dev` and localhost send no hits.
  The guard line carries `switch-domain: keep`, so a domain helper never
  removes the old hostnames from that list.
* `scripts/switch-domain.mjs` rewrites `rumbatienda.com` hosts in
  `public/index.html`, `public/sitemap.xml`, `public/robots.txt`.
  **Default scope (`phase1`):** apex, www, rumba and og only. **Tienda and
  cali2026 are left unchanged** until `--scope=all`. It skips email addresses,
  the Instagram handle `rumbaexperience`, pages.dev names and lines marked
  `switch-domain: keep`. It is idempotent and lists any occurrence it could not
  handle (exit code 2).

## Repo steps when applying or extending the switch

1. `git checkout -b chore/switch-to-rumbaexperience origin/main` (or continue
   the authorized phase branch).
2. `node --test scripts/switch-domain.test.mjs`
3. `node scripts/switch-domain.mjs` and read the dry run. On a tree already at
   phase 1, expect zero line changes and zero unhandled occurrences.
4. To rewrite deferred hosts later: `node scripts/switch-domain.mjs --scope=all`
   (dry run), then `--apply` once the dry run looks right.
5. Set `<lastmod>` in `public/sitemap.xml` to the deploy date when URLs change.
6. Update hostnames in live operational docs (`README.md`, `AGENTS.md`,
   `CLAUDE.md`, `JULIAN-START-HERE.md`, `docs/seo-workflow.md`,
   `docs/agent-deploy-handoff.md`) without blanket rewriting historical notes
   or email addresses.
7. PR, preview check, GitHub review, squash merge (normal workflow).
8. Verify live: `curl -s https://rumbaexperience.co/ | grep canonical`,
   `curl -s https://rumbaexperience.co/robots.txt`,
   `curl -s https://rumbaexperience.co/sitemap.xml`, tienda/cali links still on
   `rumbatienda.com`, and a GA4 realtime hit with hostname `rumbaexperience.co`.
9. Append one line to `brain/seo/LOG.md` with expected effect and a verify by date.

## Out of repo dependencies (owner, not this repo)

* Cloudflare Pages custom domains `rumbaexperience.co` and
  `www.rumbaexperience.co` on project `rumbatienda-landing`, plus a www to apex
  301 in the new zone.
* **Parallel serving / noindex.** When both apex hostnames serve the same HTML,
  noindex for a host that should not be indexed cannot live only in `index.html`.
  Use Cloudflare response header rules per zone (`X-Robots-Tag: noindex`) as
  documented for the migration plan. `_headers` is gitignored in this repo.
  Remove noindex rules when 301s and canonicals align for that host.
* **301 redirects:** zone level redirect rules on `rumbatienda.com` for apex and
  www to `https://rumbaexperience.co`, and rumba/og when those properties cut
  over. Each subdomain redirects only once its own repo has switched. The legacy
  `elsocial.rumbatienda.com` alias redirects directly to `rumba.rumbaexperience.co`,
  preserving path and query; keep the DNS needed to serve that redirect.
* Search Console: add `sc-domain:rumbaexperience.co`, submit
  `https://rumbaexperience.co/sitemap.xml`, use Change of Address from
  `sc-domain:rumbatienda.com` after apex 301s are live. Keep the old property.
  An apex request does not cover www or other subdomains; the owner handles
  those moves separately ([Google guidance](https://support.google.com/webmasters/answer/9370220?hl=en)).
* GA4 property `517107083` and `G-2K3BYEMTTQ` stay. Check the data stream and
  any hostname filters accept `rumbaexperience.co`.
* Matomo was retired on 2026-09-29. Do not migrate site 4 or restore the service
  as part of this switch; any remaining tracker snippet is legacy code.
* CF Web Analytics token `d95ee1d53b0548fabea5ee2442bb5f31`: confirm whether
  it is bound to a hostname and add `rumbaexperience.co` if so.
* Sibling repos switch on their own: `cali2026` has its own analytics guard
  `location.hostname === "cali2026.rumbatienda.com"` and its own funnel host
  check; `rumba-site` proxies `/api/og/*` to `og.`; `rumba-og-worker` draws the
  events hostname into images (see that repo's runbook).
