import { COMMAND_GENERATE_BARCODES, COMMAND_SEARCH_LIST } from "../constants";

import generateBarcodes from "./generateBarcodes";
import searchList from "./searchList";

export default (command, instance) => {
  switch (command) {
    case COMMAND_GENERATE_BARCODES:
      generateBarcodes(instance);
      break;
    case COMMAND_SEARCH_LIST:
      searchList(instance);
      break;
  }
};
