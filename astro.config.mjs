import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";
// import purgecss from "astro-purgecss";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.chuangcaleb.com",
  compressHTML: true,
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
          compressor(),
          // purgecss({
          //   keyframes: true,
          //   variables: true,
          // }),
        ]
      : []),
  ],
});
