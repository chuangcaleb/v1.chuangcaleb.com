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
  isInterested: boolean;
  isWork: boolean;
  isFresh: boolean;
}

export const STACK = {
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
    isWork: false,
    isFresh: false,
  },
  mcfunction: {
    icon: "mdi:minecraft",
    stage: "expert",
    isInterested: true,
    isWork: false,
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
    isWork: false,
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
    isInterested: false,
    isWork: false,
    isFresh: false,
  },
  "Material UI": {
    icon: "logos:material-ui",
    stage: "confident",
    isInterested: false,
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
    isInterested: false,
    isWork: false,
    isFresh: false,
  },
} as const satisfies { [s: string]: Tech };

export type TechName = keyof typeof STACK;

export function isInTechStack(value: string): value is TechName {
  return Object.keys(STACK).indexOf(value) !== -1;
}
