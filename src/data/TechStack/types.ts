export type TechCardIcon = {
  name: string;
  bgColor?: string;
  color?: string;
  invert?: boolean;
};

export type TechCardStatsTitle = "pro" | "exp" | "frs" | "int";
export type TechCardType = "lang" | "lib" | "meta" | "ui" | "tool";

export type Scale = 0 | 1 | 2 | 3 | 4 | 5;
export type Tier = "S" | "A" | "B" | "C" | "D" | "U";
export type Score = number;

export type TechCardStats = Record<TechCardStatsTitle, Scale>;

export type TechCard = {
  icon: TechCardIcon;
  stats?: TechCardStats;
  type: TechCardType;
  grade: { tier: Tier; score: Score };
};
export type TechDeck = { [key: string]: TechCard };

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type TechRawCard = PartialBy<PartialBy<TechCard, "type">, "grade">;
export type TechRawDeck = { [key: string]: TechRawCard };

// export type TechDeck = {
//   [s: string]: TechCard;
// };
