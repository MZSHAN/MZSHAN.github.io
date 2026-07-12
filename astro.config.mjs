// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// User-pages repo (MZSHAN/MZSHAN.github.io) serves from the domain root,
// so no `base` path is needed.
export default defineConfig({
  site: 'https://mzshan.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
