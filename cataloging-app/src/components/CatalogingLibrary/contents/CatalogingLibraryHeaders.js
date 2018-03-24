import { FORM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import { getLabel } from '../../../utils/';
export const forListView = (refresh, add, isActive) => {
  const headers = {};
  headers['refresh'] = {
    label: getLabel('LABEL_REFRESH'),
    fontIcon: 'refresh',
    onClick: refresh,
    isActive
  };
  headers['create'] = {
    label: getLabel('LABEL_ADD'),
    fontIcon: 'plus',
    onClick: add,
    isActive
  };
  return headers;
};


export const forCreateView = (isActive) => {
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
