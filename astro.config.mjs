import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import compressor from "astro-compressor";
// import purgecss from "astro-purgecss";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://chuangcaleb.vercel.app",
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
});
