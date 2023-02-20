import type { TechDeckOptionalType } from "../types";
import { appendType } from "../util";

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
} satisfies TechDeckOptionalType;

export default appendType(languages, "lang");
