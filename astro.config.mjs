import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
      // i18n: {
      //   defaultLocale: "en",
      //   locales: {
      //     en: "en-US",
      //   },
      // },
    }),
  ],
  image: {
    domains: ["images.unsplash.com"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  output: "static",
  site: "https://openorbit.tech",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },

    build: {
      cssCodeSplit: true,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            lucide: ["lucide-react"],
          },
        },
      },
    },

    optimizeDeps: {
      include: ["lucide-react"],
    },
  },
});
