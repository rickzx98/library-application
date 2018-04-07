import { Currency, UserGroup } from '../../../types/';

import { getLabel } from '../../../utils/';

export default {
  development: () => {
    const { collections, libraries, librarian } = require('../../../utils/Mocks');
    return {
      collection: collections,
      library: libraries,
      title: [],
      loantype: [],
      librarian,
      app: appStore,
      user: [],
      currency,
      vendor: [],
      fund: []
    };
  }
};


const appStore = {
  userGroup: [
    {
      field: UserGroup.LIBRARIAN,
      label: getLabel('LABEL_LIBRARIAN')
    },
    {
      field: UserGroup.ADMIN,
      label: getLabel('LABEL_ADMIN')
    },
    {
      field: UserGroup.PATRON,
      label: getLabel('LABEL_PATRON')
    }
  ]
};

const currency = [
  { _id: '000', ...Currency.new('Philippine Peso', 'Php', '₱'), isRemovable: false }
];
