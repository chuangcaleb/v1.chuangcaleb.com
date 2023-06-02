import RAW_STACK from "./raw-stack";

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

export type TechAttribute = Stage | "isInterested" | "isWork" | "isFresh";
export type TechAttributeDetails = {
  emoji: string;
  label?: string;
};

export type TechName = keyof typeof RAW_STACK;
