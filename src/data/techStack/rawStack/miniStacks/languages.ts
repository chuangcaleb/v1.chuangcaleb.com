import type { Tech } from "@data/techStack/types";

export const LANGUAGES = {
  Typescript: {
    // icon: "skill-icons:typescript",
    icon: "logos:typescript-icon",
    stage: "confident",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Javascript: {
    // icon: "skill-icons:javascript",
    icon: "logos:javascript",
    stage: "confident",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Python: {
    // icon: "skill-icons:python-dark",
    icon: "logos:python",
    stage: "confident",
    isInterested: true,
  },
  mcfunction: {
    icon: { name: "mdi:minecraft", color: "forestgreen" },
    stage: "expert",
    isInterested: true,
    isFresh: true,
  },
  Java: {
    icon: "skill-icons:java-light",
    // icon: "logos:java",
    stage: "learning",
  },
  C: {
    // icon: "skill-icons:c",
    icon: "logos:c",
    stage: "learning",
  },
  Haskell: {
    icon: "skill-icons:haskell-light",
    // icon: "logos:haskell-icon",
    stage: "exploring",
  },
  Dart: {
    // icon: "skill-icons:dart-dark",
    icon: "logos:dart",
    stage: "learning",
    isWork: true,
  },
} as const satisfies { [s: string]: Tech };
