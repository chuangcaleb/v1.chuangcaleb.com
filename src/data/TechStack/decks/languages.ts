import type { TechDeck } from "../types";

const languages = {
  Javascript: { color: "yellow", icon: "logos:javascript" },
  Typescript: { color: "blue", icon: "logos:typescript-icon" },
  // Python: { color: "sad" },
} satisfies TechDeck;

export default languages;
