import type { Tech } from "../types";

export const FRAMEWORKS = {
  React: {
    // icon: "skill-icons:react-dark",
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
    icon: "skill-icons:nextjs-light",
    // icon: "logos:nextjs-icon",
    stage: "learning",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Django: {
    // icon: "skill-icons:django",
    icon: "logos:django-icon",
    stage: "confident",
  },
  Jekyll: {
    icon: "devicon:jekyll",
    stage: "confident",
    isWork: true,
  },
  Flutter: {
    // icon: "skill-icons:flutter",
    icon: "logos:flutter",
    stage: "learning",
    isWork: true,
  },
} as const satisfies { [s: string]: Tech };
