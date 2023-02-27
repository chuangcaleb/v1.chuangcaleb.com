import type { GenericTechRawDeck } from "../types";
import processDeck from "../processDeck";

const style = {
  "Material UI": {
    icon: { bgColor: "responsive", name: "logos:material-ui" },
    stats: { pro: 3, exp: 3, frs: 5, int: 1 },
  },
} satisfies GenericTechRawDeck;

export default processDeck<typeof style>(style, "style");
