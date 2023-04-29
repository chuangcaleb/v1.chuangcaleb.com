export type Stage =
  | "researching"
  | "exploring"
  | "learning"
  | "confident"
  | "expert";

interface Tech {
  // label: string;
  icon: string;
  stage: Stage;
}

export const STACK = {
  Javascript: {
    icon: "logos:javascript",
    stage: "confident",
  },
  Typescript: {
    icon: "logos:typescript-icon",
    stage: "confident",
  },
  Python: {
    icon: "logos:python",
    stage: "confident",
  },
  React: {
    icon: "logos:react",
    stage: "confident",
  },
  Astro: {
    icon: "astro",
    stage: "confident",
  },
  Next: {
    icon: "logos:nextjs-icon",
    stage: "learning",
  },
  Django: {
    icon: "logos:django-icon",
    stage: "confident",
  },
  "Material UI": {
    icon: "logos:material-ui",
    stage: "confident",
  },
  Tailwind: {
    icon: "logos:tailwindcss-icon",
    stage: "expert",
  },
} as const satisfies { [s: string]: Tech };

export type TechName = keyof typeof STACK;
