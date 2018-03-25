import { forCreateView, forListView, forManagedUpdateViwe, forManagedView } from '../contents/CatalogingLibraryHeaders';

import { CatalogingLibraryForm } from '../contents/CatalogingLibraryForm';
import { CatalogingLibraryList } from '../contents/CatalogingLibraryList';
import React from 'react';

export default (instance) => {
  instance.state = { editable: false };
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
        element = (<CatalogingLibraryList
          data={instance.props.library}
          onSelect={instance.onSelect} />);
      });
      instance.create(() => {
        element = (<CatalogingLibraryForm
          onFailed={instance.onFormFailed}
          onSubmit={instance.onFormSubmit}
          catalogingLibrary={instance.props.catalogingLibrary}
          readOnly={false} />);
      });
      instance.view(() => {
        element = (<CatalogingLibraryForm
          onFailed={instance.onFormFailed}
          onSubmit={instance.onFormSubmit}
          catalogingLibrary={instance.props.catalogingLibrary}
          readOnly={!instance.state.editable} />);
      });
      return element;
    }
  };
};
