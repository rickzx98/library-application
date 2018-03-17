import { getLabel, requireMessage } from '../../../utils/';

import { Collection } from '../../../types/';
export default () => {
  return [
    { field: Collection.NAME, data: { require: true, requireMessage: requireMessage(Collection.NAME, getLabel('LABEL_VALIDATION_NAME_REQUIRED')) } }
  ];
};