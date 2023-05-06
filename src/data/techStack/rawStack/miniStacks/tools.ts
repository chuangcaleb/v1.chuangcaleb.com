import type { Tech } from "../types";

export const TOOLS = {
  Figma: {
    icon: "logos:figma",
    stage: "learning",
    isInterested: true,
    isWork: true,
    isFresh: true,
  },
  GIMP: {
    icon: "devicon:gimp",
    stage: "learning",
    isInterested: true,
  },
  LaTeX: {
    icon: "skill-icons:latex-light",
    stage: "learning",
  },
  Obsidian: {
    icon: { name: "simple-icons:obsidian", color: "SlateBlue" },
    stage: "expert",
    isInterested: true,
    isFresh: true,
  },
  Markdown: {
    icon: { name: "mdi:language-markdown", color: "dodgerblue" },
    stage: "expert",
    isInterested: true,
    isFresh: true,
  },
} as const satisfies { [s: string]: Tech };
