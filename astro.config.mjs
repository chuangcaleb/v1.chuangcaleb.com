import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";
import compressor from "astro-compressor";
// import purgecss from "astro-purgecss";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://example.com",
  integrations: [
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    ...(import.meta.env.PROD
      ? [
          sitemap(),
          compress({
            logger: 1,
          }),
          compressor(),
          // purgecss({
          //   keyframes: true,
          //   variables: true,
          // }),
        ]
      : []),
  ],
  adapter: vercel(),
});
