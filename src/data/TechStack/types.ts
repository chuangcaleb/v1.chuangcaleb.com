export type TechCardIcon = {
  name: string;
  bgColor?: string;
  color?: string;
  invert?: boolean;
};

export type TechCard = {
  icon: TechCardIcon;
};

export type TechDeck = { [key: string]: TechCard };

// export type TechDeck = {
//   [s: string]: TechCard;
// };
