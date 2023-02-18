// import type { TechDeck } from "../types";

import type { TechDeck } from "../types";

const frameworks = {
  React: { icon: { bgColor: "responsive", name: "logos:react" } },
  Astro: { icon: { bgColor: "black", name: "astro" } },
  CRA: { icon: { bgColor: "responsive", name: "logos:create-react-app" } },
  Next: {
    icon: { bgColor: "responsive", name: "logos:nextjs-icon", invert: true },
  },
  Django: { icon: { name: "logos:django-icon" } },
} satisfies TechDeck;

export default frameworks;
