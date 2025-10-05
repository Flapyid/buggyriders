import { describe, it, expect } from 'vitest';
import { servicesSEO, generateMetadata, defaultSEO } from '../app/utils/seo';

describe('servicesSEO integrity', () => {
  it('contains required service keys', () => {
    expect(Object.keys(servicesSEO).sort()).toEqual(['desertadventure','dunebuggy','quadbike'].sort());
  });

  it('each service has required fields', () => {
    for (const [key, value] of Object.entries(servicesSEO)) {
      expect(value.title, key + ' title').toBeTruthy();
      expect(value.description, key + ' description').toBeTruthy();
      expect(value.keywords, key + ' keywords').toBeTruthy();
      expect(value.path.startsWith('/')).toBe(true);
    }
  });
});

describe('generateMetadata', () => {
  it('merges defaults when partial data passed', () => {
    const meta = generateMetadata({ title: 'Sample', path: '/sample' });
    expect(meta.title).toContain('Sample');
    expect(meta.description).toBe(defaultSEO.description);
    expect(meta.alternates.canonical).toBe('https://buggyriders.ae/sample');
    expect(meta.openGraph.images[0].url).toContain('https://buggyriders.ae');
  });

  it('respects noIndex flag', () => {
    const meta = generateMetadata({ noIndex: true, path: '/x' });
    expect(meta.robots).toBe('noindex, nofollow');
  });
});
