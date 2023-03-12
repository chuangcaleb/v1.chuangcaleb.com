const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xlPadded: { raw: "(min-width: calc(1280px + 3rem))" },
      },
      space: {
        26: "6.5rem",
      },
      maxWidth: {
        prose: "65ch",
      },
      typography: () => ({
        secondary: {
          css: {
            "max-width": "inherit",
            // This is configured to daisyUI's `secondary-content` in hsl()
            "--bc": "230 100% 93%",
            "--tw-prose-body": "hsla(var(--bc)/.8)",
            "--tw-prose-headings": "hsl(var(--bc))",
            "--tw-prose-lead": "hsl(var(--bc))",
            "--tw-prose-links": "hsl(var(--bc))",
            "--tw-prose-bold": "hsl(var(--bc))",
            "--tw-prose-counters": "hsl(var(--bc))",
            "--tw-prose-bullets": "hsla(var(--bc)/.5)",
            "--tw-prose-hr": "hsla(var(--bc)/.2)",
            "--tw-prose-quotes": "hsl(var(--bc))",
            "--tw-prose-quote-borders": "hsla(var(--bc)/.2)",
            "--tw-prose-captions": "hsla(var(--bc)/.5)",
            "--tw-prose-code": "hsl(var(--bc))",
            "--tw-prose-th-borders": "hsla(var(--bc)/.5)",
            "--tw-prose-td-borders": "hsla(var(--bc)/.2)",
          },
        },
        dark: {
          css: {
            "max-width": "inherit",
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "--bc": "230 100% 97%",
            "--tw-prose-body": "hsla(var(--bc)/.8)",
            "--tw-prose-headings": "hsl(var(--bc))",
            "--tw-prose-lead": "hsl(var(--bc))",
            "--tw-prose-links": "hsl(var(--bc))",
            "--tw-prose-bold": "hsl(var(--bc))",
            "--tw-prose-counters": "hsl(var(--bc))",
            "--tw-prose-bullets": "hsla(var(--bc)/.5)",
            "--tw-prose-hr": "hsla(var(--bc)/.2)",
            "--tw-prose-quotes": "hsl(var(--bc))",
            "--tw-prose-quote-borders": "hsla(var(--bc)/.2)",
            "--tw-prose-captions": "hsla(var(--bc)/.5)",
            "--tw-prose-code": "hsl(var(--bc))",
            "--tw-prose-th-borders": "hsla(var(--bc)/.5)",
            "--tw-prose-td-borders": "hsla(var(--bc)/.2)",
          },
        },
        DEFAULT: {
          css: {
            "max-width": "inherit",
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "--text-opacity": 1,
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
          secondary: "#3e4460",
          // secondary: "#484f70",
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

  // darkMode: "class",
};
