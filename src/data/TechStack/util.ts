import type { TechCardType, TechDeckOptionalType } from "./types";

export function appendType(deck: TechDeckOptionalType, type: TechCardType) {
  Object.keys(deck).forEach((title) => (deck[title]["type"] = type));
  return deck;
}
