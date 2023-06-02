import type { TechAttribute, TechAttributeDetails } from "./types";

export const TECH_ATTRIBUTES: Record<TechAttribute, TechAttributeDetails> = {
  researching: { emoji: "🤔" },
  exploring: { emoji: "👉" },
  learning: { emoji: "✨" },
  confident: { emoji: "⭐️" },
  expert: { emoji: "💫" },
  isInterested: { emoji: "❤️", label: "interested" },
  isWork: { emoji: "💼", label: "professional experience" },
  isFresh: { emoji: "🌿", label: "fresh" },
};
