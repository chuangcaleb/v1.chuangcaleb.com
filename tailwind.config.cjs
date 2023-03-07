const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ccIndigo: {
          300: "#5a5f76",
          DEFAULT: "#30354a",
          700: "#262a3b",
          800: "#1e212b",
          // 700: "#090f22",
          900: "#12141c",
          fade: "#1e212b",
          on: colors.zinc[50],
        },
        ccTeal: {
          50: "#cdffff",
          200: "##9cbdb6",
          300: "#7ea8a0",
          DEFAULT: "#507972",
          700: "#254d47",
          800: "#18312e",
          900: "#10201e",
          on: colors.zinc[900],
        },
        // ccTeal: { DEFAULT: "#507972", fade: "#92B6B1" },
        // ccIndigo: { DEFAULT: "#12141c", fade: colors.zinc[800] },
        // ccDutch: { DEFAULT: "#dccb8e", fade: "#E8DDB5" },
        // invert: {
        // ccIndigo: { DEFAULT: "#08090c", fade: colors.zinc[600] },
        // ccTeal: { DEFAULT: "#73a29b", fade: "#B2C9AB" },
        // },
        // ccTimberwolf: { DEFAULT: "#D6CBC1", fade: "#CDD6D0" },
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
            "--tw-prose-links": theme("colors.zinc[700]"),
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
