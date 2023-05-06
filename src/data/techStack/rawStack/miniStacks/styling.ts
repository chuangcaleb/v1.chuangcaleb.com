import type { Tech } from "../types";

export const STYLING = {
  Tailwind: {
    icon: "logos:tailwindcss-icon",
    stage: "expert",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Sass: {
    icon: "logos:sass",
    stage: "confident",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  "Material UI": {
    icon: "logos:material-ui",
    stage: "confident",
    isWork: true,
    isFresh: true,
  },
  Bootstrap: {
    icon: "skill-icons:bootstrap",
    stage: "expert",
  },
} as const satisfies { [s: string]: Tech };
