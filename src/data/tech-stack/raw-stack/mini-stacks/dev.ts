import type { Tech } from "@data/tech-stack/types";

export const DEV = {
  VSCode: {
    icon: "logos:visual-studio-code",
    stage: "expert",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  Git: {
    icon: "logos:git-icon",
    stage: "confident",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  GitHub: {
    icon: "skill-icons:github-dark",
    // icon: "logos:github-icon",
    stage: "confident",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
} as const satisfies { [s: string]: Tech };
