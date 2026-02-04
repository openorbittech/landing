import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes("/api/") && !page.includes("/draft/"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
  ],
  output: "static",
  site: "https://openorbit.io",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: true,
    },
  },
});
