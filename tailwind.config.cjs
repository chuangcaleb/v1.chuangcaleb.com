// const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cc: {
          night: "hsl(var(--cc-night) / <alpha-value>)",
          white: "hsl(var(--cc-white) / <alpha-value>)",
          blue: "hsl(var(--cc-blue) / <alpha-value>)",
          black: "hsl(var(--cc-black) / <alpha-value>)",
        },
      },
      space: {
        26: "6.5rem",
      },
      maxWidth: {
        prose: "var(--w-prose)",
      },
      screens: {
        sm: "425px",
      },
      // typography: () => ({
      //   secondary: {
      //     css: {
      //       "max-width": "inherit",
      //       // This is configured to daisyUI's `secondary-content` in hsl()
      //       // "--bc": "230 100% 93%",
      //     },
      //   },
      //   dark: {
      //     css: {
      //       "max-width": "inherit",
      //       // "--bc": "230 100% 97%",
      //     },
      //   },
      //   DEFAULT: {
      //     css: {
      //       "max-width": "inherit",
      //     },
      //   },
      // }),
    },
  },
  // daisyui: {
  //   logs: false,
  //   themes: [
  //     {
  //       light: {
  //         primary: "#7ea8a0",
  //         secondary: "#484f70",
  //         accent: "#EC9192",
  //         neutral: colors.zinc[200],
  //         "base-100": colors.zinc[50],
  //         info: "#7dd3fc",
  //         success: "#4ade80",
  //         warning: "#fde047",
  //         error: "#ef4444",
  //       },
  //       dark: {
  //         primary: "#2563eb",
  //         // primary: "#1143b3",
  //         secondary: "#3e4460",
  //         // secondary: "#484f70",
  //         accent: "#b38111",
  //         // neutral: "#202332",
  //         neutral: "#161822",
  //         "base-100": "#262a3b",
  //         // "base-100": "#343951",
  //         info: "#7dd3fc",
  //         success: "#4ade80",
  //         warning: "#fde047",
  //         error: "#ef4444",
  //       },
  //     },
  //   ],
  // },

  // darkMode: "class",
};
