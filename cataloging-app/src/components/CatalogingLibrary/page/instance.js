import { forCreateView, forListView } from '../contents/CatalogingLibraryHeaders';

import { CatalogingLibraryForm } from '../contents/CatalogingLibraryForm';
import { CatalogingLibraryList } from '../contents/CatalogingLibraryList';
import React from 'react';

export default (instance) => ({
  componentWillMount: () => {
    instance.refresh();
    instance.createHeaders();
  },
  componentDidUpdate: (prevProps) => {
    if (instance.props.location.pathname !== prevProps.location.pathname) {
      instance.refresh();
      instance.createHeaders();
    }
    if (instance.props.ajax.started !== prevProps.ajax.started) {
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
    console.log('library', library);
  },
  createHeaders: () => {
    instance.list(() => {
      instance.props.actions.createHeaders(forListView(instance.refresh, instance.props.actions.goToNewLibrary, instance.isActive));
    });
    instance.create(() => {
      instance.props.actions.createHeaders(forCreateView(instance.isActive));
    });
  },
  refresh: () => {
    instance.list(instance.props.actions.loadLibraries);
    instance.view(({ id }) => { instance.props.actions.loadLibraryById(id); });
  },
  isActive: () => !instance.props.ajax.started,
  render: function render() {
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
        catalogingLibrary={instance.props.catalogingLibrary} readOnly={true} />);
    });
    return element;
  }
});
