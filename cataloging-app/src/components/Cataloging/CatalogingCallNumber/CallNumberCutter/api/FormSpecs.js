import { getLabel, requireMessage, Cutter } from '../../imports';

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
