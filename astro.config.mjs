import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), compressor({ gzip: true, brotli: true })],
  output: "hybrid",
  adapter: vercel({
    adapter: vercel({
      analytics: true,
      speedInsights: {
        enabled: true,
      },
    })
  }),
  redirects: {
    "/hombre": "/hombre/camiseta",
    "/mujer": "/mujer/camiseta"
  },
  image: {
    domains: ["imgaz1.chiccdn.com"],
    remotePatterns: [{protocol:"https"}]
  }
});