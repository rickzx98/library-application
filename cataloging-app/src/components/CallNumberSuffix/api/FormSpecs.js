import { getLabel, requireMessage } from '../../../utils/';

import { Suffix } from '../../../types/';

export default () => {
  return [
    {
      field: Suffix.ID,
      primaryKey: true,
      skipRender: true
    },
    {
      field: Suffix.VALUE,
      label: getLabel('LABEL_SUFFIX'),
      data: { require: true, requireMessage: requireMessage(Suffix.VALUE, getLabel('LABEL_SUFFIX')) }
    }
  ];
};
