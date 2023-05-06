import type { Tech } from "./types";

export const RAW_STACK = {
  // Langs
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
  // Frameworks
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
  // Styles
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
  // Dev
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
  // TOols
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
