import { getLabel, requireMessage, Prefix } from '../../imports';

export default () => {
  return [
    {
      field: Prefix.ID,
      primaryKey: true,
      skipRender: true
    },
    {
      field: Prefix.VALUE,
      label: getLabel('LABEL_PREFIX'),
      data: { require: true, requireMessage: requireMessage(Prefix.VALUE, getLabel('LABEL_PREFIX')) }
    }
  ];
};
