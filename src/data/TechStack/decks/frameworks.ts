import processDeck from "../processDeck";
import type { GenericTechRawDeck } from "./../types";

const frameworks = {
  Astro: {
    icon: { bgColor: "responsive", name: "astro" },
    stats: { pro: 3, exp: 2, frs: 5, int: 5 },
  },
  Next: {
    icon: { bgColor: "responsive", name: "logos:nextjs-icon", invert: true },
    stats: { pro: 3, exp: 2, frs: 4, int: 5 },
  },
  Django: {
    icon: { name: "logos:django-icon" },
    stats: { pro: 3, exp: 3, frs: 3, int: 2 },
  },
} satisfies GenericTechRawDeck;

export default processDeck<typeof frameworks>(frameworks, "meta");
