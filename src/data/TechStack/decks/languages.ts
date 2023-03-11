import type { GenericTechRawDeck } from "../types";
import processDeck from "../processDeck";
import type { TagsType } from "../buildTags";

const tags = [
  "platform/web",
  "platform/mobile",
  "typed/strong",
  "typed/loose",
  "typed/opt-in",
] as const;

const languages = {
  Javascript: {
    icon: { name: "logos:javascript" },
    tags: ["typed/loose"],
    stats: { pro: 2, exp: 2, frs: 5, int: 5 },
  },
  Typescript: {
    icon: { name: "logos:typescript-icon" },
    deps: ["logos:javascript"],
    tags: ["typed/strong"],
    stats: { pro: 2, exp: 3, frs: 5, int: 5 },
  },
  Python: {
    icon: { name: "logos:python" },
    tags: ["typed/opt-in"],
    stats: { pro: 2, exp: 3, frs: 3, int: 4 },
  },
} satisfies GenericTechRawDeck<TagsType<typeof tags>>;

export default processDeck<typeof languages>(languages, "lang");
