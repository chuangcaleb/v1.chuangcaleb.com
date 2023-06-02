import RAW_STACK from "./raw-stack";
import type { Tech, TechName } from "./types";

export const ALL_STACK_KEYS = Object.keys(RAW_STACK) as TechName[];

export const getFilteredStackKeys = (callback: (t: Tech) => boolean) =>
  Object.entries(RAW_STACK)
    .filter(([_, t]) => callback(t))
    .map(([k, _]) => k) as TechName[];

export const STACK = RAW_STACK as { [s: string]: Tech };
