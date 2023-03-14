import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import purgecss from "astro-purgecss";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ config: { applyBaseStyles: false } }),
    ...(import.meta.env.PROD
      ? [purgecss({ keyframes: true, variables: true, rejected: true })]
      : []),
    compress({ logger: 1 }),
  ],
});
