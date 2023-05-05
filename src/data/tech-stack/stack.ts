import { RAW_STACK } from "./rawStack";
import type { Tech, TechName } from "./types";

export const ALL_STACK_KEYS = Object.keys(RAW_STACK) as TechName[];

export const STACK = RAW_STACK as { [s: string]: Tech };
