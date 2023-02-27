import type { GenericTechRawDeck } from "../types";
import processDeck from "../processDeck";

const lib = {
  React: {
    icon: { bgColor: "responsive", name: "logos:react" },
    stats: { pro: 3, exp: 3, frs: 5, int: 5 },
  },
} satisfies GenericTechRawDeck;

export default processDeck<typeof lib>(lib, "lib");
