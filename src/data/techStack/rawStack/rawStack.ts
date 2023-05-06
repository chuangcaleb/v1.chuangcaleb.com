import { DEV, FRAMEWORKS, LANGUAGES, STYLING, TOOLS } from "./miniStacks";

const RAW_STACK = {
  ...LANGUAGES,
  ...FRAMEWORKS,
  ...STYLING,
  ...DEV,
  ...TOOLS,
};
export default RAW_STACK;
