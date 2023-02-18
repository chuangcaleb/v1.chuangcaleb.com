export type TechCard = {
  icon: string;
  iconBgColor?: string;
  iconColor?: string;
};

export type TechDeck = { [key: string]: TechCard };

// export type TechDeck = {
//   [s: string]: TechCard;
// };
