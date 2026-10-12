#!/usr/bin/env node
// Switch day helper: rewrites rumbatienda.com hosts to rumbaexperience.co.
//
// Usage:
//   node scripts/switch-domain.mjs            dry run (default), prints planned changes
//   node scripts/switch-domain.mjs --apply    writes the files
//
// Idempotent: a second --apply reports zero changes.
// Rewrites apex, www, rumba, tienda, cali2026 and og hosts, keeping the prefix.
// Never touches email addresses (anything after @), the Instagram handle
// "rumbaexperience", pages.dev project names, or lines marked
// "switch-domain: keep" (the analytics hostname guard keeps both domains).
// Docs: docs/domain-switch-runbook.md

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const OLD_DOMAIN = 'rumbatienda.com';
export const NEW_DOMAIN = 'rumbaexperience.co';
export const KEEP_MARKER = 'switch-domain: keep';
export const TARGET_FILES = ['public/index.html', 'public/sitemap.xml', 'public/robots.txt'];

// Optional known prefix, then the old domain. The lookbehind rejects email
// local parts (@), other subdomains or words glued to the host. The lookahead
// rejects longer labels such as rumbatienda.community.
const HOST_RE = /(?<![\w.@-])((?:www|rumba|tienda|cali2026|og)\.)?rumbatienda\.com(?![\w-])/g;

export function rewriteLine(line) {
  if (line.includes(KEEP_MARKER)) return line;
  return line.replace(HOST_RE, (_m, prefix = '') => `${prefix}${NEW_DOMAIN}`);
}

export function rewrite(text) {
  return text.split('\n').map(rewriteLine).join('\n');
}

// Occurrences of the old domain the rewrite did not handle (excluding emails
// and keep marked lines). Anything here needs a human decision on switch day.
export function unhandled(text) {
  const out = [];
  text.split('\n').forEach((line, i) => {
    if (line.includes(KEEP_MARKER)) return;
    const re = /[\w.@-]*rumbatienda\.com[\w.-]*/g;
    for (const m of line.matchAll(re)) {
      if (m[0].includes('@')) continue;
      out.push({ line: i + 1, text: m[0] });
    }
  });
  return out;
}

function main(argv) {
  const apply = argv.includes('--apply');
  const root = join(dirname(fileURLToPath(import.meta.url)), '..');
  let total = 0;
  let leftovers = 0;
  console.log(`${apply ? 'APPLY' : 'DRY RUN'}: ${OLD_DOMAIN} to ${NEW_DOMAIN}`);
  for (const rel of TARGET_FILES) {
    const path = join(root, rel);
    const before = readFileSync(path, 'utf8');
    const after = rewrite(before);
    const a = before.split('\n');
    const b = after.split('\n');
    const changed = [];
    a.forEach((line, i) => { if (line !== b[i]) changed.push(i); });
    total += changed.length;
    console.log(`\n${relative(root, path)}: ${changed.length} line(s) changed`);
    for (const i of changed) {
      console.log(`  L${i + 1} old: ${a[i].trim().slice(0, 160)}`);
      console.log(`  L${i + 1} new: ${b[i].trim().slice(0, 160)}`);
    }
    const left = unhandled(after);
    leftovers += left.length;
    for (const u of left) console.log(`  UNHANDLED L${u.line}: ${u.text}`);
    if (apply && changed.length) writeFileSync(path, after);
  }
  console.log(`\nTotal: ${total} line(s) ${apply ? 'rewritten' : 'would change'}, ${leftovers} unhandled occurrence(s).`);
  if (!apply) console.log('Nothing written. Re-run with --apply to write.');
  if (leftovers) process.exitCode = 2;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main(process.argv.slice(2));
}
