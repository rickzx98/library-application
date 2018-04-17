import { HeaderControl, getLabel } from '../imports';

export const forListHeaders = (isSelected) => {
  const headers = {};
  const editControl = new HeaderControl(getLabel('LABEL_EDIT'), 'pencil', 'subjectHeaderOnClick', 'edit');
  const deleteControl =  new HeaderControl(getLabel('LABEL_DELETE'), 'trash', 'subjectHeaderOnClick', 'remove');

  editControl.setVisible(isSelected);
  deleteControl.setVisible(isSelected);

  headers['back'] = new HeaderControl(getLabel('LABEL_BACK'), 'arrow-left', 'subjectHeaderOnClick', 'back');
  headers['add'] = new HeaderControl(getLabel('LABEL_ADD'), 'plus', 'subjectHeaderOnClick', 'add');
  headers['edit'] = editControl;
  headers['remove'] = deleteControl;
  headers['refresh'] = new HeaderControl(getLabel('LABEL_REFRESH'), 'refresh', 'subjectHeaderOnClick', 'refresh');
  return headers;
};

export const forCreateHeaders = ()=> {
  const headers = {};
  headers['back'] = new HeaderControl(getLabel('LABEL_BACK'), 'arrow-left', 'subjectHeaderOnClick', 'back');
  headers['save'] = new HeaderControl(getLabel('LABEL_SAVE'), 'floppy-o', 'subjectHeaderOnClick', 'save');
  return headers;
};
