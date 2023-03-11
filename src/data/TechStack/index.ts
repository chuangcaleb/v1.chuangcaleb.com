import frameworks from "./decks/frameworks";
import languages from "./decks/languages";
import style from "./decks/styles";
import type { TechCard } from "./types";

const TechStack = Object.assign(languages, frameworks, style);

export type TechTitle = keyof typeof TechStack;

export default TechStack as Record<TechTitle, TechCard>;
