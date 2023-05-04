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
  isInterested?: boolean;
  isWork?: boolean;
  isFresh?: boolean;
}

const BUILD_STACK = {
  Javascript: {
    icon: "logos:javascript",
    stage: "confident",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Typescript: {
    icon: "logos:typescript-icon",
    stage: "confident",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Python: {
    icon: "logos:python",
    stage: "confident",
    isInterested: true,
  },
  mcfunction: {
    icon: "mdi:minecraft",
    stage: "expert",
    isInterested: true,
    isFresh: true,
  },
  React: {
    icon: "logos:react",
    stage: "confident",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Astro: {
    icon: "astro",
    stage: "confident",
    isInterested: true,
    isFresh: true,
  },
  Next: {
    icon: "logos:nextjs-icon",
    stage: "learning",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Django: {
    icon: "logos:django-icon",
    stage: "confident",
  },
  "Material UI": {
    icon: "logos:material-ui",
    stage: "confident",
    isWork: true,
    isFresh: true,
  },
  Tailwind: {
    icon: "logos:tailwindcss-icon",
    stage: "expert",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Bootstrap: {
    icon: "logos:bootstrap",
    stage: "expert",
  },
} as const satisfies { [s: string]: Tech };

export type TechName = keyof typeof BUILD_STACK;

export const STACK_KEYS = Object.keys(BUILD_STACK) as TechName[];

export const STACK = BUILD_STACK as { [s: string]: Tech };
