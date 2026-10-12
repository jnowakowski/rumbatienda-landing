# Domain switch runbook: rumbatienda.com to rumbaexperience.co

Scope of this repo: the apex landing (`rumbatienda.com`, future
`rumbaexperience.co`). Subdomains (`rumba.`, `tienda.`, `cali2026.`, `og.`)
keep their prefix on the new domain and switch in their own repos.

## Phases

1. **Now, parallel serving.** Both hosts serve the same `public/`. Links,
   sitemap and robots stay on `rumbatienda.com`. The self canonical
   `https://rumbatienda.com/` in `public/index.html` makes the new host point
   search engines at the old one. The new host must also send
   `X-Robots-Tag: noindex` (see "Out of repo dependencies").
2. **Switch day.** Rewrite this repo to the new domain, then 301 the old
   hosts to the new ones.

## What is already prepared in this repo

* `<link rel="canonical" href="https://rumbatienda.com/" />` in the head.
* Analytics (GA4, CF Web Analytics, Matomo) load only on
  `rumbatienda.com`, `www.rumbatienda.com`, `rumbaexperience.co`,
  `www.rumbaexperience.co`. Previews, `*.pages.dev` and localhost send no hits.
  The guard line carries `switch-domain: keep`, so it keeps accepting both
  domains after the rewrite (old hosts only matter until the 301 is live).
* `scripts/switch-domain.mjs` rewrites `rumbatienda.com` hosts (apex, www,
  rumba, tienda, cali2026, og) to the same prefix on `rumbaexperience.co` in
  `public/index.html`, `public/sitemap.xml`, `public/robots.txt`. It skips
  email addresses, the Instagram handle `rumbaexperience`, pages.dev names and
  lines marked `switch-domain: keep`. It is idempotent and lists any
  occurrence it could not handle (exit code 2).

## Switch day steps in this repo

1. `git checkout -b chore/switch-to-rumbaexperience origin/main`
2. `node --test scripts/switch-domain.test.mjs`
3. `node scripts/switch-domain.mjs` and read the dry run. Expect zero
   unhandled occurrences.
4. `node scripts/switch-domain.mjs --apply`, then run it once more and
   confirm `0 line(s) rewritten`.
5. Set `<lastmod>` in `public/sitemap.xml` to the switch date.
6. Update hostnames in `README.md`, `AGENTS.md`, `CLAUDE.md`,
   `JULIAN-START-HERE.md` and `docs/seo-workflow.md` in the same PR or a follow up.
7. PR, preview check, GitHub review, squash merge (normal workflow).
8. Verify live: `curl -s https://rumbaexperience.co/ | grep canonical`,
   `curl -s https://rumbaexperience.co/robots.txt`,
   `curl -s https://rumbaexperience.co/sitemap.xml`, and a GA4 realtime hit with
   hostname `rumbaexperience.co`.
9. Append one line to `brain/seo/LOG.md` with expected effect and a verify by date.

## Out of repo dependencies (owner, not this repo)

* Cloudflare Pages custom domains `rumbaexperience.co` and
  `www.rumbaexperience.co` on project `rumbatienda-landing`, plus a www to apex
  301 in the new zone.
* **noindex during parallel serving.** This HTML is shared by both hosts, so
  noindex for the new host cannot live in `index.html`. It has to be a
  Cloudflare response header rule on the `rumbaexperience.co` zone
  (`X-Robots-Tag: noindex`). `_headers` is gitignored in this repo, so do not
  plan on a Pages `_headers` file without changing that first. Remove the rule
  on switch day, before or together with the 301.
* **Switch day 301:** zone level redirect rule on `rumbatienda.com`,
  path and query preserving, for apex and www to `https://rumbaexperience.co`.
  Each subdomain redirects only once its own repo has switched.
* Search Console: add `sc-domain:rumbaexperience.co`, submit
  `https://rumbaexperience.co/sitemap.xml`, use Change of Address from
  `sc-domain:rumbatienda.com` after the 301 is live. Keep the old property.
* GA4 property `517107083` and `G-2K3BYEMTTQ` stay. Check the data stream and
  any hostname filters accept `rumbaexperience.co`.
* Matomo site 4: add `rumbaexperience.co` to the site URLs (check the setting,
  it may exclude unknown hosts).
* CF Web Analytics token `d95ee1d53b0548fabea5ee2442bb5f31`: confirm whether
  it is bound to a hostname and add `rumbaexperience.co` if so.
* Sibling repos switch on their own: `cali2026` has its own analytics guard
  `location.hostname === "cali2026.rumbatienda.com"` and its own funnel host
  check; `rumba-site` proxies `/api/og/*` to `og.`; `rumba-og-worker` draws the
  events hostname into images (see that repo's runbook).
