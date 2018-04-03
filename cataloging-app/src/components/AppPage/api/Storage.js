import { getLabel } from '../../../utils/';

export default {
  development: () => {
    const { collections, libraries, librarian } = require('../../../utils/Mocks');
    return {
      collection: collections,
      library: libraries,
      title: [],
      loantype: [],
      librarian
      app: appStore,
      librarian,
      user: []
    };
  }
};


const appStore = {
  userGroup: [
    {
      field: 'librarian',
      label: getLabel('LABEL_LIBRARIAN')
    }
  ]
};
