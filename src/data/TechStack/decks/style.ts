import type { TechRawDeck } from "../types";
import { processDeck } from "../util";

const style = {
  "Material UI": {
    icon: { bgColor: "responsive", name: "logos:material-ui" },
    stats: { pro: 3, exp: 3, frs: 5, int: 1 },
  },
} satisfies TechRawDeck;

export default processDeck(style, "style");
