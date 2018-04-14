import { Barcode, Currency, UserGroup } from '../../../types/';

import { getLabel } from '../../../utils/';

const APP_KEY = process.env.APP_KEY;

export default {
  development: () => {
    const { collections, libraries, librarian, prefixes, suffixes, cutters, subjects } = require('../../../utils/Mocks');
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
      fund: [],
      barcode: [],
      prefix: prefixes,
      suffix: suffixes,
      cutter: cutters,
      parameter: [...barcode],
      subject: subjects,
    };
  }
};

const barcode = [
  {
    ...Barcode.new({
    }, APP_KEY)
  }
];

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
