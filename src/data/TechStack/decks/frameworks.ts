// import type { TechDeck } from "../types";

import type { TechDeck } from "../types";

const frameworks = {
  React: { iconBgColor: "responsive", icon: "logos:react" },
  Astro: { iconBgColor: "black", icon: "astro" },
  CRA: { iconBgColor: "responsive", icon: "logos:create-react-app" },
  Next: { iconBgColor: "white", icon: "logos:nextjs-icon" },
  Django: { icon: "logos:django-icon" },
} satisfies TechDeck;

export default frameworks;
