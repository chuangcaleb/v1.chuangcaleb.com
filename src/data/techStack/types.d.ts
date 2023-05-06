import RAW_STACK from "./rawStack";

export type Stage =
  | "researching"
  | "exploring"
  | "learning"
  | "confident"
  | "expert";

export interface Tech {
  // label: string;
  icon:
    | string
    | {
        name: string;
        color: string;
      };
  stage: Stage;
  isInterested?: boolean;
  isWork?: boolean;
  isFresh?: boolean;
}

export type TechName = keyof typeof RAW_STACK;
