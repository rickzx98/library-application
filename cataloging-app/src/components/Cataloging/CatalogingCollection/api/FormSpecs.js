import { Collection, getLabel, requireMessage } from '../imports';

export default () => {
  return [
    {
      field: Collection.ID,
      primaryKey: true,
      skipRender: true
    },
    {
      field: Collection.NAME,
      label: getLabel('LABEL_NAME'),
      data: { require: true, requireMessage: requireMessage(Collection.NAME, getLabel('LABEL_VALIDATION_NAME_REQUIRED')) }
    },
    {
      field: Collection.TITLES,
      label: getLabel('LABEL_TITLES'),
      data: {
        default: []
      }
    }
  ];
};
