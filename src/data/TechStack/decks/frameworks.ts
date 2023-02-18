// import type { TechDeck } from "../types";

import type { TechDeck } from "../types";

const frameworks = {
  React: { iconBgColor: "white", icon: "logos:react" },
  Astro: { iconBgColor: "responsive", icon: "simple-icons:astro" },
  CRA: { iconBgColor: "responsive", icon: "logos:create-react-app" },
  Next: { iconBgColor: "white", icon: "logos:nextjs-icon" },
  Django: { icon: "logos:django-icon" },
} satisfies TechDeck;

export default frameworks;
