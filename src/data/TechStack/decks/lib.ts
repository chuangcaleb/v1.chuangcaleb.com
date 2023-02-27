import type { TechRawDeck } from "../types";
import { processDeck } from "../util";

const lib = {
  React: {
    icon: { bgColor: "responsive", name: "logos:react" },
    stats: { pro: 3, exp: 3, frs: 5, int: 5 },
  },
} satisfies TechRawDeck;

export default processDeck(lib, "lib");
