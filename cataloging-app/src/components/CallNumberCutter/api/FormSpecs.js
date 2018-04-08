import { getLabel, requireMessage } from '../../../utils/';

import { Cutter } from '../../../types/';

export default () => {
  return [
    {
      field: Cutter.ID,
      primaryKey: true,
      skipRender: true
    },
    {
      field: Cutter.VALUE,
      label: getLabel('LABEL_CUTTER'),
      data: { require: true, requireMessage: requireMessage(Cutter.VALUE, getLabel('LABEL_CUTTER')) }
    }
  ];
};
