import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    compressor({ gzip: true, brotli: true }),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
  }),
  redirects: {
    "/hombre": "/hombre/camiseta",
    "/mujer": "/mujer/camiseta",
    "/en/women": "/en/women/t-shirt",
    "/en/men": "/en/men/t-shirt",
  },
  image: {
    domains: ["imgaz1.chiccdn.com", "hips.hearstapps.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: [ "en", "es"],
  //   routing: {
  //     prefixDefaultLocale: true
  //   },
  //   fallback: {
  //     en: "es"
  //   }
  // }
});
