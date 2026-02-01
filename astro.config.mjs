import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcssPostcss from '@tailwindcss/postcss';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: vercel(),
  site: 'https://openorbit.io',
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssPostcss,
        ],
      },
    },
  },
});
