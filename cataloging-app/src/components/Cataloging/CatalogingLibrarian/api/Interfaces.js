import FluidFunc from 'fluid-func';
import { PAGE_NAME } from '../constants';
FluidFunc.create(PAGE_NAME)
  .onStart(({ action }) => {
    let data = [];
    switch (action()) {
      case 'getListData':
        data = [];
        break;
      default:
        break;
    }
    return { data };
  });

