import type { GenericTechRawDeck } from "../types";
import processDeck from "../processDeck";

const languages = {
  Javascript: {
    icon: { name: "logos:javascript" },
    stats: { pro: 2, exp: 2, frs: 5, int: 5 },
  },
  Typescript: {
    icon: { name: "logos:typescript-icon" },
    deps: ["logos:javascript"],
    stats: { pro: 2, exp: 3, frs: 5, int: 5 },
  },
  Python: {
    icon: { name: "logos:python" },
    stats: { pro: 2, exp: 3, frs: 3, int: 4 },
  },
} satisfies GenericTechRawDeck;

export default processDeck<typeof languages>(languages, "lang");
