import frameworks from "./decks/frameworks";
import languages from "./decks/languages";
import lib from "./decks/lib";
import style from "./decks/style";
import type { TechCard } from "./types";

const TechStack = Object.assign({}, languages, frameworks, style, lib);

export type TechTitle = keyof typeof TechStack;

export default TechStack as Record<TechTitle, TechCard>;
