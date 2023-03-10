const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
            "--tw-prose-headings": theme("colors.zinc[600]"),
            "--tw-prose-lead": theme("colors.zinc[500]"),
            "--tw-prose-links": theme("colors.zinc[600]"),
            "--tw-prose-code": theme("colors.zinc[500]"),
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
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          primary: "#7ea8a0",
          secondary: "#484f70",
          accent: "#EC9192",
          neutral: colors.zinc[200],
          "base-100": colors.zinc[50],
          info: "#7dd3fc",
          success: "#4ade80",
          warning: "#fde047",
          error: "#ef4444",
        },
        dark: {
          primary: "#2563eb",
          // primary: "#1143b3",
          secondary: "#484f70",
          accent: "#b38111",
          // neutral: "#202332",
          neutral: "#161822",
          "base-100": "#262a3b",
          // "base-100": "#343951",
          info: "#7dd3fc",
          success: "#4ade80",
          warning: "#fde047",
          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // darkMode: "class",
};
