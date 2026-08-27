import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// URL base de produção — usada por canonical, Open Graph, sitemap e JSON-LD.
export default defineConfig({
  site: 'https://splashsistemas.com.br',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // 404 nunca entra no sitemap.
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
