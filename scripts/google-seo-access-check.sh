#!/usr/bin/env bash
set -euo pipefail

property_id="517107083"
gsc_property="sc-domain:rumbatienda.com"

for command_name in gcloud curl jq; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    printf 'ERROR: %s is required.\n' "$command_name" >&2
    exit 1
  fi
done

access_token="$(gcloud auth application-default print-access-token 2>/dev/null || true)"
if [[ -z "$access_token" ]]; then
  printf '%s\n' 'ERROR: Google Application Default Credentials are missing.' >&2
  printf '%s\n' 'Run the gcloud auth application-default login command from docs/julian-seo-onboarding.md.' >&2
  exit 1
fi

analytics_response="$(curl -fsS \
  -X POST \
  -H "Authorization: Bearer $access_token" \
  -H 'Content-Type: application/json' \
  -d '{
    "dateRanges": [{"startDate": "7daysAgo", "endDate": "yesterday"}],
    "dimensions": [{"name": "hostName"}],
    "metrics": [{"name": "sessions"}, {"name": "activeUsers"}],
    "limit": "20"
  }' \
  "https://analyticsdata.googleapis.com/v1beta/properties/${property_id}:runReport")"

printf 'GA4 property %s: OK\n' "$property_id"
printf '%s' "$analytics_response" | jq -r '
  ["host", "sessions", "active users"],
  (.rows[]? | [
    .dimensionValues[0].value,
    .metricValues[0].value,
    .metricValues[1].value
  ]) | @tsv'

sites_response="$(curl -fsS \
  -H "Authorization: Bearer $access_token" \
  'https://searchconsole.googleapis.com/webmasters/v3/sites')"

if ! printf '%s' "$sites_response" | jq -e --arg site "$gsc_property" \
  '.siteEntry[]? | select(.siteUrl == $site)' >/dev/null; then
  printf 'ERROR: canonical Search Console property %s is not available.\n' "$gsc_property" >&2
  exit 1
fi

permission_level="$(printf '%s' "$sites_response" | jq -r --arg site "$gsc_property" \
  '.siteEntry[] | select(.siteUrl == $site) | .permissionLevel')"
printf 'Search Console %s: OK (%s)\n' "$gsc_property" "$permission_level"
printf '%s\n' 'Google SEO access is ready.'
