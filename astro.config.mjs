import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  site: "https://timostrackfeldt.com",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
