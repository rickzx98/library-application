import { COMMAND_GENERATE_BARCODES } from "../constants";
import generateBarcodes from "./generateBarcodes";

export default (command, instance) => {
  switch (command) {
    case COMMAND_GENERATE_BARCODES:
      generateBarcodes(instance);
      break;
  }
};
