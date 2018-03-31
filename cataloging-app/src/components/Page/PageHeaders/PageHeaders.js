import { FluidForm } from 'fluid-commons';
import { getLabel } from '../../../utils/';
export class PageHeaders {
  constructor(formName) {
    this.formName = formName;
    this.forListView = this._forListView.bind(this);
    this.forCreateView = this._forCreateView.bind(this);
    this.forManagedUpdateView = this._forManagedUpdateView.bind(this);
    this.forManagedView = this._forManagedView.bind(this);
  }
  _forListView(refresh, add, back, isActive, parent) {
    const headers = {};
    if (parent) {
      headers['back'] = {
        label: getLabel('LABEL_BACK'),
        fontIcon: 'arrow-left',
        onClick: back,
        isActive: isActive,
      };
    }
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
  }
  _forCreateView(back, isActive) {
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
        FluidForm.submit(this.formName);
      },
      isActive: isActive,
      fontIcon: 'save'
    };
    return headers;
  }
  _forManagedView(back, edit, remove, refresh, isActive) {
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
    headers['refresh'] = {
      label: getLabel('LABEL_REFRESH'),
      fontIcon: 'refresh',
      onClick: refresh,
      isActive
    };
    headers['delete'] = {
      label: getLabel('LABEL_DELETE'),
      fontIcon: 'trash',
      onClick: remove,
      isActive: isActive,
    };
    return headers;
  }
  _forManagedUpdateView(cancel, isActive) {
    const headers = {};

    headers['update'] = {
      label: getLabel('LABEL_SAVE'),
      onClick: () => {
        FluidForm.submit(this.formName);
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
  }
}
