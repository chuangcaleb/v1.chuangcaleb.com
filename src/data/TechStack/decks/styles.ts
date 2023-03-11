import type { GenericTechRawDeck } from "../types";
import processDeck from "../processDeck";
import type { TagsType } from "../buildTags";

const tags = ["component-lib", "behavior-lib", "style-system"] as const;

const style = {
  "Material UI": {
    icon: { bgColor: "responsive", name: "logos:material-ui" },
    deps: ["logos:javascript", "logos:react"],
    tags: ["component-lib", "behavior-lib", "style-system"],
    stats: { pro: 3, exp: 3, frs: 5, int: 1 },
  },
} satisfies GenericTechRawDeck<TagsType<typeof tags>>;

export default processDeck<typeof style>(style, "style");
