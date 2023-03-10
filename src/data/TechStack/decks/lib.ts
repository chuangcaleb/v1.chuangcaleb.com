import type { GenericTechRawDeck } from "../types";
import processDeck from "../processDeck";

const lib = {} satisfies GenericTechRawDeck;

export default processDeck<typeof lib>(lib, "lib");
