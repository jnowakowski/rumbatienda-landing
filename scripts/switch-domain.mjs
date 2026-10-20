#!/usr/bin/env node
// Switch day helper: rewrites rumbatienda.com hosts to rumbaexperience.co.
//
// Usage:
//   node scripts/switch-domain.mjs                      dry run, phase 1 scope (default)
//   node scripts/switch-domain.mjs --scope=all          dry run, every known host prefix
//   node scripts/switch-domain.mjs --apply              writes the files (same scope flags)
//
// Idempotent: a second --apply reports zero changes.
// Default scope (phase 1): apex, www, rumba and og. Tienda and cali2026 stay on
// rumbatienda.com until a later phase (--scope=all rewrites those too).
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

export const SCOPE_PHASE1 = 'phase1';
export const SCOPE_ALL = 'all';

/** Prefixes rewritten in phase 1 (apex has no prefix). */
export const PHASE1_PREFIXES = ['www', 'rumba', 'og'];

/** Prefixes only rewritten with --scope=all. */
export const LATER_PHASE_PREFIXES = ['tienda', 'cali2026'];

const ALL_KNOWN_PREFIXES = [...PHASE1_PREFIXES, ...LATER_PHASE_PREFIXES];

function hostPatternForScope(scope) {
  const prefixes =
    scope === SCOPE_ALL ? ALL_KNOWN_PREFIXES : PHASE1_PREFIXES;
  const alt = prefixes.join('|');
  return new RegExp(
    `(?<![\\w.@-])((?:${alt})\\.)?${OLD_DOMAIN.replace('.', '\\.')}(?![\\w-])`,
    'g',
  );
}

export function parseScope(argv) {
  const explicit = argv.find((a) => a.startsWith('--scope='));
  if (!explicit) return SCOPE_PHASE1;
  const value = explicit.slice('--scope='.length);
  if (value === SCOPE_PHASE1 || value === SCOPE_ALL) return value;
  throw new Error(`Unknown --scope=${value} (use phase1 or all)`);
}

export function rewriteLine(line, scope = SCOPE_PHASE1) {
  if (line.includes(KEEP_MARKER)) return line;
  return line.replace(hostPatternForScope(scope), (_m, prefix = '') => `${prefix}${NEW_DOMAIN}`);
}

export function rewrite(text, scope = SCOPE_PHASE1) {
  return text.split('\n').map((line) => rewriteLine(line, scope)).join('\n');
}

const LATER_HOST_RE = new RegExp(
  `(?:tienda|cali2026)\\.${OLD_DOMAIN.replace('.', '\\.')}`,
);

// Occurrences of the old domain the rewrite did not handle (excluding emails,
// keep marked lines, and hosts intentionally left in phase 1). Anything here
// needs a human decision on switch day.
export function unhandled(text, scope = SCOPE_PHASE1) {
  const out = [];
  text.split('\n').forEach((line, i) => {
    if (line.includes(KEEP_MARKER)) return;
    const re = /[\w.@-]*rumbatienda\.com[\w.-]*/g;
    for (const m of line.matchAll(re)) {
      if (m[0].includes('@')) continue;
      if (scope === SCOPE_PHASE1 && LATER_HOST_RE.test(m[0])) continue;
      out.push({ line: i + 1, text: m[0] });
    }
  });
  return out;
}

function main(argv) {
  const apply = argv.includes('--apply');
  const scope = parseScope(argv);
  const root = join(dirname(fileURLToPath(import.meta.url)), '..');
  let total = 0;
  let leftovers = 0;
  console.log(
    `${apply ? 'APPLY' : 'DRY RUN'}: ${OLD_DOMAIN} to ${NEW_DOMAIN} (scope=${scope})`,
  );
  for (const rel of TARGET_FILES) {
    const path = join(root, rel);
    const before = readFileSync(path, 'utf8');
    const after = rewrite(before, scope);
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
    const left = unhandled(after, scope);
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
