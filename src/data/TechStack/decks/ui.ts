import type { TechDeckOptionalType } from "../types";
import { appendType } from "../util";

const ui = {
  "Material UI": { icon: { bgColor: "responsive", name: "logos:material-ui" } },
} satisfies TechDeckOptionalType;

export default appendType(ui, "ui");
