import { PageForm, PageHeaders, PageList } from '../../Page/';
import { Page } from '../../common/';

import React from 'react';

export default ({pageName, FormSpecs, TableColumns, page, formProps, listTransformer}) => (instance) => {
  instance.state = {editable: false};
  const { forCreateView, forListView, forManagedUpdateView, forManagedView } = new PageHeaders(pageName);
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
    onSelect: (pageValue) => {
      instance.props.actions.goTo(pageValue);
    },
    onFormFailed: (stack) => {
      instance.props.actions.onFailed(stack);
    },
    onFormSubmit: (pageValue) => {
      instance.create(() => {
        instance.props.actions.create(pageValue);
      });
    },
    createHeaders: () => {
      instance.list(() => {
        instance.props.actions.createHeaders(forListView(instance.refresh, instance.props.actions.goToNew, instance.isActive));
      });
      instance.create(() => {
        instance.props.actions.createHeaders(forCreateView(instance.props.actions.prevPage, instance.isActive));
      });
      instance.view(() => {
        if (!instance.state.editable) {
          instance.props.actions.createHeaders(forManagedView(instance.props.actions.prevPage, () => {
            instance.setEditable(true);
          }, instance.remove, instance.isActive));
        } else {
          instance.props.actions.createHeaders(forManagedUpdateView(instance.cancelEdit, instance.isActive));
        }
      });
    },
    refresh: () => {
      instance.list(()=> {
        instance.props.actions.load(pageName, listTransformer);
      });
      instance.view(({ id }) => {
        instance.props.actions.loadById(id);
      });
    },
    isActive: () => !instance.props.ajax.started,
    setEditable: (value) => {
      instance.view(() => {
        instance.setState({editable: value});
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
        instance.props.actions.delete(id);
      });
    },
    render: ()=> {
      let element = (<div/>);
      instance.list(() => {
        element = (<PageList
          columns={TableColumns}
          data={instance.props.pageList}
          onSelect={instance.onSelect}/>);
      });
      instance.create(() => {
        element = (<PageForm
          {...formProps}
          formSpecs={FormSpecs}
          formName={pageName}
          formValue={instance.props.pageForm}
          onFailed={instance.onFormFailed}
          onSubmit={instance.onFormSubmit}
          readOnly={false}/>);
      });
      instance.view(() => {
        element = (<PageForm
          {...formProps}
          formSpecs={FormSpecs}
          formName={pageName}
          formValue={instance.props.pageForm}
          onFailed={instance.onFormFailed}
          onSubmit={instance.onFormSubmit}
          readOnly={!instance.state.editable}/>);
      });
      return <Page {...page}>{element}</Page>;
    }
  };
};
