import type { TagsType } from "../buildTags";
import processDeck from "../processDeck";
import type { GenericTechRawDeck } from "./../types";

const tags = ["fullstack", "frontend", "backend", "ORM"] as const;

const frameworks = {
  React: {
    icon: { bgColor: "transparent", name: "logos:react" },
    deps: ["logos:javascript", "logos:typescript-icon"],
    tags: ["frontend"],
    stats: { pro: 3, exp: 3, frs: 5, int: 5 },
  },
  Astro: {
    icon: { bgColor: "black", name: "astro" },
    deps: ["logos:javascript"],
    tags: ["frontend"],
    stats: { pro: 3, exp: 2, frs: 5, int: 5 },
  },
  Next: {
    icon: { bgColor: "transparent", name: "logos:nextjs-icon", invert: true },
    deps: ["logos:javascript", "logos:react"],
    tags: ["fullstack"],
    stats: { pro: 3, exp: 2, frs: 4, int: 5 },
  },
  Django: {
    icon: { name: "logos:django-icon" },
    deps: ["logos:python"],
    tags: ["fullstack", "ORM"],
    stats: { pro: 3, exp: 3, frs: 3, int: 2 },
  },
} satisfies GenericTechRawDeck<TagsType<typeof tags>>;

export default processDeck<typeof frameworks>(frameworks, "meta");
