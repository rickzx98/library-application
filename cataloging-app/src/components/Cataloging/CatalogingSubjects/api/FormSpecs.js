import { Subject, getLabel } from '../imports';
export default () => {
  return [
    {
      field: Subject.ID,
      primaryKey: true,
      skipRender: true
    },
    {
      label: getLabel('LABEL_PARENT'),
      field: Subject.PARENT,
    },
    {
      label: getLabel('LABEL_SUBJECT'),
      field: Subject.NAME,
      data: {
        require: true
      }
    }
  ];
};
