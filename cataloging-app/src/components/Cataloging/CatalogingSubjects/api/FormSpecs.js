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
      isVisible: (state)=> state && state.data && state.data[Subject.PARENT],
      public: true
    },
    {
      label: getLabel('LABEL_SUBJECT'),
      field: Subject.NAME,
      data: {
        require: true
      }
    }
  ]
    ;
};
