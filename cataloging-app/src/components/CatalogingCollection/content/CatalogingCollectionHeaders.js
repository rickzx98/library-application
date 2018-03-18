import { FORM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import { getLabel } from '../../../utils/';
export const createHeadersForTable = (add, refresh, isActive) => {
  const headers = {};
  headers['add'] = {
    label: getLabel('LABEL_ADD'),
    onClick: add,
    isActive: isActive,
    fontIcon: 'plus'
  };
  headers['refresh'] = {
    label: getLabel('LABEL_REFRESH'),
    onClick: refresh,
    isActive: isActive,
    fontIcon: 'refresh'
  };
  return headers;
};

export const createHeadersForCreateForm = (isActive) => {
  const headers = {};
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


export const createHeadersForUpdateForm = (refresh, isActive, cancel, remove) => {
  const headers = {};
  headers['update'] = {
    label: getLabel('LABEL_UPDATE'),
    onClick: () => {
      FluidForm.submit(FORM_NAME);
    },
    isActive: isActive,
    fontIcon: 'save'
  };
  headers['delete'] = {
    label: getLabel('LABEL_DELETE'),
    onClick: remove,
    isActive: isActive,
    fontIcon: 'trash'
  };
  headers['refresh'] = {
    label: getLabel('LABEL_REFRESH'),
    onClick: refresh,
    isActive: isActive,
    fontIcon: 'refresh'
  };
  headers['cancel'] = {
    label: getLabel('LABEL_CANCEL'),
    onClick: cancel,
    isActive: isActive,
    fontIcon: 'close'
  };
  return headers;
};
