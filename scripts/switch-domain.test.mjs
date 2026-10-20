// Run: node --test scripts/switch-domain.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  rewrite,
  unhandled,
  SCOPE_ALL,
  SCOPE_PHASE1,
  parseScope,
} from './switch-domain.mjs';

const LANDING_SNIPPET = [
  '<link rel="canonical" href="https://rumbatienda.com/" />',
  '<a href="https://rumba.rumbatienda.com">Events</a>',
  '<a href="https://tienda.rumbatienda.com">Shop</a>',
  '<a href="https://cali2026.rumbatienda.com">Cali</a>',
].join('\n');

test('phase 1 rewrites apex and rumba but keeps tienda and cali2026 on rumbatienda.com', () => {
  const out = rewrite(LANDING_SNIPPET, SCOPE_PHASE1);
  assert.match(out, /canonical" href="https:\/\/rumbaexperience\.co\/"/);
  assert.match(out, /https:\/\/rumba\.rumbaexperience\.co/);
  assert.doesNotMatch(out, /tienda\.rumbaexperience/);
  assert.doesNotMatch(out, /cali2026\.rumbaexperience/);
  assert.match(out, /https:\/\/tienda\.rumbatienda\.com/);
  assert.match(out, /https:\/\/cali2026\.rumbatienda\.com/);
  assert.deepEqual(unhandled(out, SCOPE_PHASE1), []);
});

test('phase 1 rewrites www and og prefixes', () => {
  const input = [
    'https://www.rumbatienda.com/x',
    'https://og.rumbatienda.com/day/martes',
    'Sitemap: https://rumbatienda.com/sitemap.xml',
  ].join('\n');
  const expected = [
    'https://www.rumbaexperience.co/x',
    'https://og.rumbaexperience.co/day/martes',
    'Sitemap: https://rumbaexperience.co/sitemap.xml',
  ].join('\n');
  assert.equal(rewrite(input, SCOPE_PHASE1), expected);
});

test('--scope=all rewrites every known subdomain prefix', () => {
  const input = [
    'https://rumbatienda.com/',
    'https://www.rumbatienda.com/x',
    'https://rumba.rumbatienda.com',
    'https://tienda.rumbatienda.com',
    'https://cali2026.rumbatienda.com',
    'https://og.rumbatienda.com/day/martes',
    'Sitemap: https://rumbatienda.com/sitemap.xml',
  ].join('\n');
  const expected = [
    'https://rumbaexperience.co/',
    'https://www.rumbaexperience.co/x',
    'https://rumba.rumbaexperience.co',
    'https://tienda.rumbaexperience.co',
    'https://cali2026.rumbaexperience.co',
    'https://og.rumbaexperience.co/day/martes',
    'Sitemap: https://rumbaexperience.co/sitemap.xml',
  ].join('\n');
  assert.equal(rewrite(input, SCOPE_ALL), expected);
});

test('leaves emails, the Instagram handle and pages.dev untouched', () => {
  const input = [
    '<a href="mailto:hola@rumbatienda.com">hola@rumbatienda.com</a>',
    '<a href="https://www.instagram.com/rumbaexperience/">@rumbaexperience</a>',
    'https://rumbatienda-landing.pages.dev',
    'rumbatienda.community',
  ].join('\n');
  assert.equal(rewrite(input, SCOPE_PHASE1), input);
  assert.equal(rewrite(input, SCOPE_ALL), input);
});

test('skips lines carrying the keep marker', () => {
  const line = "var hosts = ['rumbatienda.com', 'www.rumbatienda.com', /* switch-domain: keep */";
  assert.equal(rewrite(line, SCOPE_PHASE1), line);
});

test('is idempotent under phase 1', () => {
  const input = '<link rel="canonical" href="https://rumbatienda.com/" /> https://rumba.rumbatienda.com';
  const once = rewrite(input, SCOPE_PHASE1);
  assert.equal(rewrite(once, SCOPE_PHASE1), once);
  assert.match(once, /rumbaexperience\.co/);
});

test('reports unknown subdomains as unhandled, ignores emails and deferred hosts in phase 1', () => {
  const mixed =
    'https://mta-sts.rumbatienda.com x@rumbatienda.com https://tienda.rumbatienda.com https://rumbatienda.com';
  const afterPhase1 = rewrite(mixed, SCOPE_PHASE1);
  assert.deepEqual(unhandled(afterPhase1, SCOPE_PHASE1).map((u) => u.text), [
    'mta-sts.rumbatienda.com',
  ]);
  const afterAll = rewrite(mixed, SCOPE_ALL);
  assert.deepEqual(unhandled(afterAll, SCOPE_ALL).map((u) => u.text), [
    'mta-sts.rumbatienda.com',
  ]);
});

test('parseScope defaults to phase1 and accepts all', () => {
  assert.equal(parseScope([]), SCOPE_PHASE1);
  assert.equal(parseScope(['--apply']), SCOPE_PHASE1);
  assert.equal(parseScope(['--scope=all']), SCOPE_ALL);
  assert.throws(() => parseScope(['--scope=tienda']), /Unknown --scope/);
});
