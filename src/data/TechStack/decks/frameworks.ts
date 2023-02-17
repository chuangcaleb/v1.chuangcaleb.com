// import type { TechDeck } from "../types";

import type { TechDeck } from "../types";

const frameworks = {
  React: { color: "Astro", icon: "logos:react" },
  Astro: { color: "Astro", icon: "simple-icons:astro" },
  CRA: { color: "Astro", icon: "logos:create-react-app" },
  Next: { color: "Astro", icon: "logos:nextjs-icon" },
  Django: { color: "Astro", icon: "logos:django-icon" },
} satisfies TechDeck;

export default frameworks;
