# Tienda Outage: `DEPLOYMENT_NOT_FOUND`

Date opened: 2026-05-20
Last verified: 2026-05-20 19:05 America/Bogota
Affected host: `https://tienda.rumbatienda.com/`
Scope: Shop outage only. This is not the apex landing (`rumbatienda.com`) and not `cali2026.rumbatienda.com`.

## Summary

`tienda.rumbatienda.com` is currently pointed at Vercel, but Vercel has no active deployment attached to that hostname.

This is not an application crash inside the Next.js app. The request is failing before the shop app can serve content.

## Evidence

Reproduced from this machine on 2026-05-20:

```text
HTTP/1.1 404 Not Found
x-vercel-error: DEPLOYMENT_NOT_FOUND
x-vercel-id: iad1::ws69t-1779321947397-8a642b201a2f
```

Response body:

```text
The deployment could not be found on Vercel.

DEPLOYMENT_NOT_FOUND
```

## Likely Causes

One of these is true:

1. The correct Vercel project still exists, but the current production deployment is gone.
2. `tienda.rumbatienda.com` is attached to the wrong Vercel project or environment.
3. The shop project or its production deployment was deleted or detached.

## What The Deployment Owner Should Check

1. In Vercel, locate the shop project for `tienda.rumbatienda.com`.
2. Confirm the domain is attached to the correct project and the correct environment.
3. Check whether the most recent production deployment was deleted, failed, or was never promoted.
4. If the project still exists, trigger a fresh production redeploy.
5. If the domain mapping is wrong, reattach `tienda.rumbatienda.com` to the correct project.
6. If the project or deployment was removed, restore it or recreate the project from the correct repo.

## Local Blockers On This Machine

I could not complete the fix end-to-end from this machine because:

- there was no local checkout of the shop repo available at the time of investigation
- the shop repo remote `git@github.com:jnowakowski/rumbatienda.git` is not accessible from this machine right now
- there is no local Vercel CLI session or project metadata for the shop here

## Repo Context

From `rumbatienda-landing/AGENTS.md`:

- `rumbatienda-landing` -> `https://rumbatienda.com` on Cloudflare Pages
- `cali2026` -> `https://cali2026.rumbatienda.com` on Cloudflare Pages
- `rumbatienda` -> `https://tienda.rumbatienda.com` on Vercel

That means the outage is in the sibling shop repo and/or in Vercel project configuration, not in this landing repo.

## Suggested Follow-up

After the deployment owner restores service:

1. capture the correct shop repo URL in shared docs
2. document the Vercel project name and domain mapping
3. verify who owns production access for `tienda.rumbatienda.com`
4. add a simple external uptime check for the shop hostname
