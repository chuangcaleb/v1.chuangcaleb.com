import type {
  Score,
  TechCardType,
  GenericTechRawDeck,
  Tier,
  TechDeck,
} from "./types";

const MIN_THRESHOLD: Record<Tier, Score> = {
  S: 90,
  A: 80,
  B: 70,
  C: 55,
  D: 40,
  U: 0,
};

export default function processDeck<T>(
  deck: GenericTechRawDeck<string[]>,
  type: TechCardType
) {
  Object.keys(deck).forEach((title) => {
    const card = deck[title];
    card["type"] = type;
    if (card.stats) {
      const score: Score =
        Object.values(card.stats).reduce(
          (total, curr) => total + curr,
          0 as number
        ) * 5;
      const tier: Tier =
        score >= MIN_THRESHOLD.S
          ? "S"
          : score >= MIN_THRESHOLD.A
          ? "A"
          : score >= MIN_THRESHOLD.B
          ? "B"
          : score >= MIN_THRESHOLD.C
          ? "C"
          : score >= MIN_THRESHOLD.D
          ? "D"
          : "U";
      Object.assign(card, { grade: { score: score, tier: tier } });
    }
  });
  return deck as TechDeck<T>;
}
