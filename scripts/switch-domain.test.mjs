// Run: node --test scripts/switch-domain.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rewrite, unhandled } from './switch-domain.mjs';

test('rewrites apex and every known subdomain, keeping the prefix', () => {
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
  assert.equal(rewrite(input), expected);
});

test('leaves emails, the Instagram handle and pages.dev untouched', () => {
  const input = [
    '<a href="mailto:hola@rumbatienda.com">hola@rumbatienda.com</a>',
    '<a href="https://www.instagram.com/rumbaexperience/">@rumbaexperience</a>',
    'https://rumbatienda-landing.pages.dev',
    'rumbatienda.community',
  ].join('\n');
  assert.equal(rewrite(input), input);
});

test('skips lines carrying the keep marker', () => {
  const line = "var hosts = ['rumbatienda.com', 'www.rumbatienda.com', /* switch-domain: keep */";
  assert.equal(rewrite(line), line);
});

test('is idempotent', () => {
  const input = '<link rel="canonical" href="https://rumbatienda.com/" /> https://rumba.rumbatienda.com';
  const once = rewrite(input);
  assert.equal(rewrite(once), once);
  assert.match(once, /rumbaexperience\.co/);
});

test('reports unknown subdomains as unhandled, ignores emails', () => {
  const after = rewrite('https://mta-sts.rumbatienda.com x@rumbatienda.com https://rumbatienda.com');
  assert.deepEqual(unhandled(after).map((u) => u.text), ['mta-sts.rumbatienda.com']);
});
