import { FluidForm, FluidFunc, Page, React } from "../imports";
import {
  PageForm,
  PageHeaders,
  PageListWithLinks,
  PageTabbedForm,
  WithLinks
} from "../../Page/";

import { FLUID_TRIGGER_COMMAND } from "../constants";

export default ({
  pageName,
  FormSpecs,
  TableColumns,
  page,
  formProps,
  listTransformer,
  routes,
  links,
  fieldKey,
  overridePages = {},
  tabbed = false,
  pageLinks,
  commands,
  headerControls
}) => instance => {
  instance.state = { editable: false, links };
  const {
    forCreateView,
    forListView,
    forManagedUpdateView,
    forManagedView
  } = new PageHeaders(pageName);
  FluidFunc.create(`${pageName}_${FLUID_TRIGGER_COMMAND}`).onStart(param => {
    instance.onTriggerCommand(param);
  });
  return {
    componentWillMount: () => {
      instance.refresh();
      instance.createHeaders();
      instance.setEditable(false);
      instance.setLinks();
    },
    componentDidUpdate: (prevProps, prevState) => {
      if (
        instance.props.routing.location.pathname !==
        prevProps.routing.location.pathname
      ) {
        instance.state = {};
        FluidForm.clear(pageName);
        instance.refresh();
        instance.createHeaders();
        instance.setLinks();
      }
      if (
        instance.state.activeKey !== prevState.activeKey ||
        instance.state.editable !== prevState.editable
      ) {
        instance.createHeaders();
        instance.setLinks();
      }
      if (
        instance.props.ajax.started !== prevProps.ajax.started ||
        instance.state.editable !== prevState.editable
      ) {
        instance.createHeaders();
      }
    },
    componentWillUnmount: () => {
      instance.state = {};
      FluidForm.clear(pageName);
    },
    onTriggerCommand: ({ command }) => {
      if (commands) {
        commands(command(), {
          state: instance.state,
          props: {
            actions: instance.props.actions,
            pageForm: instance.props.pageForm,
            pageList: instance.props.pageList
          }
        });
      }
    },
    onSelect: rowValue => {
      instance.list(({ parent }) => {
        instance.props.actions.goTo(routes, rowValue, parent);
      });
    },
    onFormFailed: ({ stack }) => {
      instance.props.actions.onFailed(stack, pageName);
    },
    onFormSubmit: pageValue => {
      const raw = pageValue.getRaw();
      instance.create(() => {
        instance.props.actions.create(pageName, raw);
      });
      instance.view(({ id }) => {
        instance.props.actions.update(pageName, id, raw);
        instance.setEditable(false);
      });
    },
    overrideHeaders(defaultControls) {
      if (headerControls && headerControls instanceof Function) {
        const controls = headerControls({ defaultControls, props: instance.props, state: instance.state });
        if (controls) {
          return controls;
        }
      }
      return defaultControls;
    },
    createHeaders: () => {
      instance.list(() => {
        instance.props.actions.createHeaders(
          instance.overrideHeaders(forListView(
            instance.refresh,
            instance.goToNew,
            instance.props.actions.back,
            instance.isActive
          ))
        );
      });
      instance.create(() => {
        instance.props.actions.createHeaders(
          instance.overrideHeaders(forCreateView(instance.prevPage, instance.isActive))
        );
      });
      instance.view(() => {
        if (!instance.state.editable) {
          instance.props.actions.createHeaders(
            instance.overrideHeaders(
              forManagedView(
                instance.prevPage,
                () => {
                  instance.setEditable(true);
                },
                instance.remove,
                instance.refresh,
                instance.isActive,
                instance.isEditable,
                instance.isRemovable
              ))
          );
        } else {
          instance.props.actions.createHeaders(
            instance.overrideHeaders(forManagedUpdateView(instance.cancelEdit, instance.isActive))
          );
        }
      });
    },
    refresh: () => {
      instance.list(({ parent }) => {
        instance.props.actions.load(pageName, parent, listTransformer);
      });
      instance.view(({ id }) => {
        instance.props.actions.loadById(pageName, id);
      });
    },
    isActive: () => !instance.props.ajax.started,
    isEditable: () =>
      instance.props.pageForm.data &&
        instance.props.pageForm.data["isEditable"] !== undefined
        ? instance.props.pageForm.data["isEditable"]
        : true,
    isRemovable: () =>
      instance.props.pageForm.data &&
        instance.props.pageForm.data["isRemovable"] !== undefined
        ? instance.props.pageForm.data["isRemovable"]
        : true,
    setEditable: value => {
      instance.view(() => {
        instance.setState({ editable: value });
      });
    },
    cancelEdit: () => {
      instance.view(({ id }) => {
        instance.props.actions.cancelChanges(pageName, id, () => {
          instance.setEditable(false);
        });
      });
    },
    remove: () => {
      instance.view(({ id }) => {
        instance.props.actions.deleteData(pageName, id);
      });
    },
    goToNew: () => {
      instance.list(({ parent }) => {
        instance.props.actions.goToNew(routes, parent);
      });
    },
    prevPage: () => {
      instance.props.actions.prevPage(pageName);
    },
    goToUrl: url => {
      instance.list(() => {
        instance.props.actions.goToUrl(url);
      });
    },
    onSelectTab: activeKey => {
      if (formProps.onSelectTab) {
        formProps.onSelectTab(activeKey);
      }
      instance.setState({ activeKey });
    },
    setLinks: () => {
      if (pageLinks) {
        let links = [];
        instance.list(params => {
          links = pageLinks("list", instance.state, params);
        });
        instance.create(params => {
          links = pageLinks("create", instance.state, params);
        });
        instance.view(params => {
          links = pageLinks("view", instance.state, params);
        });
        instance.setState({ links });
      } else {
        instance.list(() => {
          instance.setState({ links });
        });
        instance.create(() => {
          instance.setState({ links: [] });
        });
        instance.view(() => {
          instance.setState({ links: [] });
        });
      }
    },
    render: function Instance() {
      let element = <div />;
      instance.list(() => {
        element = (
          <PageListWithLinks
            name={pageName}
            fieldKey={fieldKey}
            goToUrl={instance.goToUrl}
            state={instance.state}
            props={instance.props}
            links={instance.state.links}
            columns={TableColumns}
            data={instance.props.pageList}
            onSelect={instance.onSelect}
          />
        );
      });
      instance.create(() => {
        element = (
          <WithLinks
            goToUrl={instance.goToUrl}
            state={instance.state}
            props={instance.props}
            links={instance.state.links}
            className={`clearfix ${!tabbed && "page-form"}`}
          >
            {overridePages.create &&
              overridePages.create({
                formSpecs: FormSpecs,
                pageName,
                onFailed: instance.onFormFailed,
                onSubmit: instance.onFormSubmit,
                ...formProps
              })}
            {!overridePages.create &&
              !tabbed && (
                <PageForm
                  {...formProps}
                  formSpecs={FormSpecs}
                  formName={pageName}
                  formValue={instance.props.pageForm}
                  onFailed={instance.onFormFailed}
                  onSubmit={instance.onFormSubmit}
                  readOnly={false}
                />
              )}

            {!overridePages.create &&
              tabbed && (
                <PageTabbedForm
                  {...formProps}
                  formSpecs={FormSpecs}
                  formName={pageName}
                  formValue={instance.props.pageForm}
                  onFailed={instance.onFormFailed}
                  onSubmit={instance.onFormSubmit}
                  onSelectTab={instance.onSelectTab}
                  readOnly={false}
                />
              )}
          </WithLinks>
        );
      });
      instance.view(() => {
        element = (
          <WithLinks
            goToUrl={instance.goToUrl}
            state={instance.state}
            props={instance.props}
            links={instance.state.links}
            className={`clearfix ${!tabbed && "page-form"}`}
          >
            {overridePages.view &&
              overridePages.view({
                formSpecs: FormSpecs,
                pageName,
                onFailed: instance.onFormFailed,
                onSubmit: instance.onFormSubmit,
                ...formProps
              })}
            {!overridePages.view &&
              !tabbed && (
                <PageForm
                  {...formProps}
                  formSpecs={FormSpecs}
                  formName={pageName}
                  formValue={instance.props.pageForm}
                  onFailed={instance.onFormFailed}
                  onSubmit={instance.onFormSubmit}
                  readOnly={!instance.state.editable}
                />
              )}

            {!overridePages.view &&
              tabbed && (
                <PageTabbedForm
                  {...formProps}
                  formSpecs={FormSpecs}
                  formName={pageName}
                  formValue={instance.props.pageForm}
                  onFailed={instance.onFormFailed}
                  onSubmit={instance.onFormSubmit}
                  onSelectTab={instance.onSelectTab}
                  readOnly={!instance.state.editable}
                />
              )}
          </WithLinks>
        );
      });

      return <Page {...page}>{element}</Page>;
    }
  };
};
