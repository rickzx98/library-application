import { FluidFunc, React, FluidForm, Subject } from '../imports';
import { PAGE_NAME } from '../constants';
import { CatalogingSubjectsBody } from '../contents/CatalogingSubjectsBody';
import { forListHeaders, forCreateHeaders} from '../contents/CatalogingSubjectHeaders';

export default (instance) => {
  instance.state = {};
  FluidFunc.create('subjectHeaderOnClick')
    .onStart(({ action }) => {
      switch (action()) {
        case 'back':
          instance.tree(()=> {
            instance.props.actions.back();
          });
          instance.create(()=> {
            instance.props.actions.prevPage();
          });
          instance.createWithParent(()=> {
            instance.props.actions.prevPage();
          });
          instance.view(()=> {
            instance.props.actions.prevPage();
          });
          break;
        case 'add':
          instance.props.actions.goToCreate();
          break;
        case 'refresh':
          instance.refresh();
          break;
        case 'save':
          FluidForm.submit(PAGE_NAME);
          break;
        case 'edit':
          instance.props.actions.editSubject();
          break;
        case 'remove':
          instance.props.actions.removeSubject();
          break;
        default:
          break;
      }
    });
  return {
    componentWillMount: () => {
      instance.refresh();
      instance.createHeaders();
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
      if (instance.props.content.selected !== prevProps.content.selected) {
        instance.createHeaders();
      }
    },
    createHeaders: () => {
      instance.tree(() => {
        instance.props.actions.createHeaders(forListHeaders(instance.isSelected));
      });
      instance.create(()=> {
        instance.props.actions.createHeaders(forCreateHeaders());
      });
      instance.createWithParent(()=> {
        instance.props.actions.createHeaders(forCreateHeaders());
      });
      instance.view(()=> {
        instance.props.actions.createHeaders(forCreateHeaders());
      });
    },
    refresh: () => {
      instance.tree(() => {
        instance.props.actions.clearActive();
        instance.props.actions.clearContent();
        instance.props.actions.loadSubjects();
      });
      instance.createWithParent(({parent})=> {
        FluidForm.set(PAGE_NAME, Subject.PARENT, parent);
      });
      instance.view(({id})=> {
        instance.props.actions.loadSubjectById(id);
      });
    },
    onToggle: (node, toggled) => {
      instance.props.actions.loadSubjectsChildren(node, toggled);
    },
    onSubmit: (value) => {
      instance.create(()=> {
        instance.props.actions.create(value);
      });
      instance.createWithParent(()=> {
        instance.props.actions.create(value);
      });
      instance.view(({id})=> {
        instance.props.actions.update(id, value);
      });
    },
    onFailed: () => {
    },
    isSelected: ()=> {
      const { content } = instance.props;
      return content && content.selected && content.selected.length > 0;
    },
    render: function render() {
      return (<CatalogingSubjectsBody
        onSubmit={instance.onSubmit}
        onFailed={instance.onFailed}
        createWithParent={instance.createWithParent}
        tree={instance.tree}
        create={instance.create}
        view={instance.view}
        formValue={instance.props.pageForm}
        subjects={instance.props.subjects}
        onToggle={instance.onToggle}/>);
    }
  };
};
