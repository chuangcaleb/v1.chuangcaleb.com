import type { TechRawDeck } from "./../types";

import { processDeck } from "../util";

const frameworks = {
  React: { icon: { bgColor: "responsive", name: "logos:react" } },
  Astro: { icon: { bgColor: "black", name: "astro" } },
  CRA: { icon: { bgColor: "responsive", name: "logos:create-react-app" } },
  Next: {
    icon: { bgColor: "responsive", name: "logos:nextjs-icon", invert: true },
  },
  Django: { icon: { name: "logos:django-icon" } },
} satisfies TechRawDeck;

export default processDeck(frameworks, "meta");
