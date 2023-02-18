export type TechCardIcon = {
  name: string;
  bgColor?: string;
  color?: string;
  invert?: boolean;
};

export type TechCardStatsTitles = "pro" | "exp" | "frs" | "int";

export type Scale = 0 | 1 | 2 | 3 | 4 | 5;

export type TechCardStats = Record<TechCardStatsTitles, Scale>;

export type TechCard = {
  icon: TechCardIcon;
  stats?: TechCardStats;
};

export type TechDeck = { [key: string]: TechCard };

// export type TechDeck = {
//   [s: string]: TechCard;
// };
