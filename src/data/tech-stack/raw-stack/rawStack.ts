import { DEV, FRAMEWORKS, LANGUAGES, STYLING, TOOLS } from "./mini-stacks";

const RAW_STACK = {
  ...LANGUAGES,
  ...FRAMEWORKS,
  ...STYLING,
  ...DEV,
  ...TOOLS,
};
export default RAW_STACK;
