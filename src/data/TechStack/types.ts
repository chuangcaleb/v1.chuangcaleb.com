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

export type TechCard<T = string[]> = {
  icon: TechCardIcon;
  deps?: string[];
  tags?: T;
  stats: TechCardStats;
  type: TechCardType;
  grade: TechCardGrade;
};

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type TechRawCard<T> = PartialBy<PartialBy<TechCard<T>, "type">, "grade">;
export type GenericTechRawDeck<T> = Record<string, TechRawCard<T>>;

export type TechDeck<T> = Record<keyof T, TechCard>;
