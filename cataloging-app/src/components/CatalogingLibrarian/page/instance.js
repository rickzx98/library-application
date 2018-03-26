import { FormSpecs, TableColumns } from '../api/';
import { PageForm, PageHeaders, PageList } from '../../Page/';

import { FORM_NAME } from '../constants';
import React from 'react';

export default (instance) => {
  instance.state = { editable: false };
  const { forCreateView, forListView, forManagedUpdateViwe, forManagedView } = new PageHeaders(FORM_NAME);
  return {
    componentWillMount: () => {
      instance.refresh();
      instance.createHeaders();
      instance.setEditable(false);
    },
    componentDidUpdate: (prevProps, prevState) => {
      if (instance.props.routing.location.pathname !== prevProps.routing.location.pathname) {
        instance.refresh();
        instance.createHeaders();
      }
      if ((instance.props.ajax.started !== prevProps.ajax.started) ||
        (instance.state.editable !== prevState.editable)) {
        instance.createHeaders();
      }
    },
    onSelect: (library) => {
      instance.props.actions.goToLibrary(library);
    },
    onFormFailed: (stack) => {
      instance.props.actions.onFailed(stack);
    },
    onFormSubmit: (library) => {
      instance.create(() => {
        instance.props.actions.createLibrary(library);
      });
    },
    createHeaders: () => {
      instance.list(() => {
        instance.props.actions.createHeaders(forListView(instance.refresh, instance.props.actions.goToNewLibrary, instance.isActive));
      });
      instance.create(() => {
        instance.props.actions.createHeaders(forCreateView(instance.props.actions.prevPage, instance.isActive));
      });
      instance.view(() => {
        if (!instance.state.editable) {
          instance.props.actions.createHeaders(forManagedView(instance.props.actions.prevPage, () => { instance.setEditable(true); }, instance.remove, instance.isActive));
        } else {
          instance.props.actions.createHeaders(forManagedUpdateViwe(instance.cancelEdit, instance.isActive));
        }
      });
    },
    refresh: () => {
      instance.list(instance.props.actions.loadLibraries);
      instance.view(({ id }) => { instance.props.actions.loadLibraryById(id); });
    },
    isActive: () => !instance.props.ajax.started,
    setEditable: (value) => {
      instance.view(() => {
        instance.setState({ editable: value });
      });
    },
    cancelEdit: () => {
      instance.view(({ id }) => {
        instance.props.actions.cancelChanges(id, () => {
          instance.setEditable(false);
        });
      });
    },
    remove: () => {
      instance.view(({ id }) => {
        instance.props.actions.deleteLibrary(id);
      });
    },
    render: () => {
      let element;
      instance.list(() => {
        element = (<PageList
          columns={TableColumns}
          data={instance.props.library}
          onSelect={instance.onSelect} />);
      });
      instance.create(() => {
        element = (<PageForm
          formSpecs={FormSpecs}
          formName={FORM_NAME}
          formValue={instance.props.catalogingLibrarian}
          onFailed={instance.onFormFailed}
          onSubmit={instance.onFormSubmit}
          readOnly={false} />);
      });
      instance.view(() => {
        element = (<PageForm
          formSpecs={FormSpecs}
          formName={FORM_NAME}
          formValue={instance.props.catalogingLibrarian}
          onFailed={instance.onFormFailed}
          onSubmit={instance.onFormSubmit}
          readOnly={!instance.state.editable} />);
      });
      return element;
    }
  };
};
