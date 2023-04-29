interface Tech {
  // label: string;
  icon: string;
}

export const STACK = {
  Javascript: {
    icon: "logos:javascript",
  },
  Typescript: {
    icon: "logos:typescript-icon",
  },
  Python: {
    icon: "logos:python",
  },
  React: {
    icon: "logos:react",
  },
  Astro: {
    icon: "astro",
  },
  Next: {
    icon: "logos:nextjs-icon",
  },
  Django: {
    icon: "logos:django-icon",
  },
  "Material UI": {
    icon: "logos:material-ui",
  },
  Tailwind: {
    icon: "logos:tailwindcss-icon",
  },
} as const satisfies { [s: string]: Tech };

export type TechName = keyof typeof STACK;
