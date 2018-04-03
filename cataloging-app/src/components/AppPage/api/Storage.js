import { getLabel } from '../../../utils/';
import { UserGroup } from '../../../types/';
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
      user: []
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
      field:  UserGroup.PATRON,
      label: getLabel('LABEL_PATRON')
    }
  ]
};
