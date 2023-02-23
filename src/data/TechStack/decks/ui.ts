import type { TechRawDeck } from "../types";
import { processDeck } from "../util";

const ui = {
  "Material UI": { icon: { bgColor: "responsive", name: "logos:material-ui" } },
} satisfies TechRawDeck;

export default processDeck(ui, "ui");
