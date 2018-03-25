import { FORM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import { getLabel } from '../../../utils/';

export const forListView = (refresh, add, isActive) => {
  const headers = {};
  headers['create'] = {
    label: getLabel('LABEL_ADD'),
    fontIcon: 'plus',
    onClick: add,
    isActive
  };
  headers['refresh'] = {
    label: getLabel('LABEL_REFRESH'),
    fontIcon: 'refresh',
    onClick: refresh,
    isActive
  };
  return headers;
};


export const forCreateView = (back, isActive) => {
  const headers = {};
  headers['back'] = {
    label: getLabel('LABEL_BACK'),
    fontIcon: 'arrow-left',
    onClick: back,
    isActive: isActive,
  };
  headers['create'] = {
    label: getLabel('LABEL_SAVE'),
    onClick: () => {
      FluidForm.submit(FORM_NAME);
    },
    isActive: isActive,
    fontIcon: 'save'
  };
  return headers;
};


export const forManagedView = (back, edit, remove, isActive) => {
  const headers = {};
  headers['back'] = {
    label: getLabel('LABEL_BACK'),
    fontIcon: 'arrow-left',
    onClick: back,
    isActive: isActive,
  };
  headers['edit'] = {
    label: getLabel('LABEL_EDIT'),
    onClick: edit,
    isActive: isActive,
    fontIcon: 'pencil'
  };
  headers['delete'] = {
    label: getLabel('LABEL_DELETE'),
    fontIcon: 'trash',
    onClick: remove,
    isActive: isActive,
  };
  return headers;
};

export const forManagedUpdateViwe = (cancel, isActive) => {
  const headers = {};

  headers['update'] = {
    label: getLabel('LABEL_SAVE'),
    onClick: () => {
      FluidForm.submit(FORM_NAME);
    },
    isActive: isActive,
    fontIcon: 'save'
  };

  headers['edit'] = {
    label: getLabel('LABEL_CANCEL'),
    onClick: cancel,
    isActive: isActive,
    fontIcon: 'close'
  };
  return headers;
};
