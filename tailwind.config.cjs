/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1c1f2b",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-invert-body": theme("colors.zinc[200]"),
            "--tw-prose-invert-headings": theme("colors.zinc[200]"),
            "--tw-prose-invert-lead": theme("colors.zinc[200]"),
            "--tw-prose-invert-links": theme("colors.zinc[200]"),
            "--tw-prose-invert-code": theme("colors.zinc[200]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  // darkMode: "class",
};
