import processDeck from "../processDeck";
import type { GenericTechRawDeck } from "./../types";

const frameworks = {
  React: {
    icon: { bgColor: "transparent", name: "logos:react" },
    deps: ["logos:javascript", "logos:typescript-icon"],
    stats: { pro: 3, exp: 3, frs: 5, int: 5 },
  },
  Astro: {
    icon: { bgColor: "black", name: "astro" },
    deps: ["logos:javascript"],
    stats: { pro: 3, exp: 2, frs: 5, int: 5 },
  },
  Next: {
    icon: { bgColor: "transparent", name: "logos:nextjs-icon", invert: true },
    deps: ["logos:javascript", "logos:react"],
    stats: { pro: 3, exp: 2, frs: 4, int: 5 },
  },
  Django: {
    icon: { name: "logos:django-icon" },
    deps: ["logos:python"],
    stats: { pro: 3, exp: 3, frs: 3, int: 2 },
  },
} satisfies GenericTechRawDeck;

export default processDeck<typeof frameworks>(frameworks, "meta");
