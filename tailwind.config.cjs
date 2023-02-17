const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ccWhite: { DEFAULT: colors.zinc[50], fade: colors.zinc[500] },
        ccSlate: "#30354a",
        ccCambridge: { DEFAULT: "#507972", fade: "#73a29b" },
        invert: {
          // ccIndigo: { DEFAULT: "#08090c", fade: colors.zinc[600] },
          ccIndigo: { DEFAULT: "#12141c", fade: colors.zinc[600] },
          ccSlate: "#292d3a",
          ccCambridge: { DEFAULT: "#92B6B1", fade: "#B2C9AB" },
          // #E8DDB5
        },
      },
      screens: {
        xlPadded: { raw: "(min-width: calc(1280px + 3rem))" },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "--tw-prose-body": theme("colors.zinc[600]"),
            "--tw-prose-headings": theme("colors.zinc[700]"),
            "--tw-prose-lead": theme("colors.zinc[600]"),
            "--tw-prose-links": theme("colors.zinc[600]"),
            "--tw-prose-code": theme("colors.zinc[600]"),
            // "--tw-prose-bold": theme("colors.pink[900]"),
            // "--tw-prose-counters": theme("colors.pink[600]"),
            // "--tw-prose-bullets": theme("colors.pink[400]"),
            // "--tw-prose-hr": theme("colors.pink[300]"),
            // "--tw-prose-quotes": theme("colors.pink[900]"),
            // "--tw-prose-quote-borders": theme("colors.pink[300]"),
            // "--tw-prose-captions": theme("colors.pink[700]"),
            // "--tw-prose-pre-code": theme("colors.pink[100]"),
            // "--tw-prose-pre-bg": theme("colors.pink[900]"),
            // "--tw-prose-th-borders": theme("colors.pink[300]"),
            // "--tw-prose-td-borders": theme("colors.pink[200]"),

            // * Invert
            "--tw-prose-invert-body": theme("colors.zinc[300]"),
            "--tw-prose-invert-headings": theme("colors.zinc[300]"),
            "--tw-prose-invert-lead": theme("colors.zinc[300]"),
            "--tw-prose-invert-links": theme("colors.zinc[300]"),
            "--tw-prose-invert-code": theme("colors.zinc[300]"),
            // "--tw-prose-invert-bold": theme("colors.white"),
            // "--tw-prose-invert-counters": theme("colors.pink[400]"),
            "--tw-prose-invert-bullets": theme("colors.zinc[500]"),
            // "--tw-prose-invert-hr": theme("colors.pink[700]"),
            // "--tw-prose-invert-quotes": theme("colors.pink[100]"),
            // "--tw-prose-invert-quote-borders": theme("colors.pink[700]"),
            // "--tw-prose-invert-captions": theme("colors.pink[400]"),
            // "--tw-prose-invert-pre-code": theme("colors.pink[300]"),
            // "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            // "--tw-prose-invert-th-borders": theme("colors.pink[600]"),
            // "--tw-prose-invert-td-borders": theme("colors.pink[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  // darkMode: "class",
};
