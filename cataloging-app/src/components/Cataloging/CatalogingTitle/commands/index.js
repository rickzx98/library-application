import generateBarcodes from './generateBarcodes';
import {COMMAND_GENERATE_BARCODES} from '../constants';

export default (command, instance) => {
  switch (command) {
    case COMMAND_GENERATE_BARCODES:
      generateBarcodes(instance);
      break;
  }
};
