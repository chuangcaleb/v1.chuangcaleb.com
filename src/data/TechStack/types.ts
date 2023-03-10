export type TechCardIcon = {
  name: string;
  bgColor?: string;
  color?: string;
  invert?: boolean;
};

export type TechCardStatsTitle = "pro" | "exp" | "frs" | "int";
export type TechCardType = "lang" | "lib" | "meta" | "style" | "tool";

export type Scale = 0 | 1 | 2 | 3 | 4 | 5;
export type Tier = "S" | "A" | "B" | "C" | "D" | "U";
export type Score = number;
export type TechCardGrade = { tier: Tier; score: Score };

export type TechCardStats = Record<TechCardStatsTitle, Scale>;

export type TechCard = {
  icon: TechCardIcon;
  deps?: string[];
  stats: TechCardStats;
  type: TechCardType;
  grade: TechCardGrade;
};

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type TechRawCard = PartialBy<PartialBy<TechCard, "type">, "grade">;
export type GenericTechRawDeck = Record<string, TechRawCard>;

export type TechDeck<T> = Record<keyof T, TechCard>;
