import type { TechRawDeck } from "../types";
import { processDeck } from "../util";

const languages = {
  Javascript: {
    icon: { name: "logos:javascript" },
    stats: { pro: 2, exp: 2, frs: 5, int: 5 },
  },
  Typescript: {
    icon: { name: "logos:typescript-icon" },
    stats: { pro: 2, exp: 3, frs: 5, int: 5 },
  },
  // Python: { color: "sad" },
} satisfies TechRawDeck;

export default processDeck(languages, "lang");
