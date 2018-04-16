import { FluidFunc, React } from '../imports';

import { CatalogingSubjectsBody } from '../contents/CatalogingSubjectsBody';
import { forListHeaders } from '../contents/CatalogingSubjectHeaders';

export default (instance) => {
  instance.state = {};
  FluidFunc.create('subjectHeaderOnClick')
    .onStart(({ action }) => {
      switch (action()) {
        case 'add':
          console.log('just add');
          break;
        case 'refresh':
          instance.refresh();
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
    createHeaders: () => {
      instance.tree(() => {
        instance.props.actions.createHeaders(forListHeaders());
      });
    },
    refresh: () => {
      instance.tree(() => { instance.props.actions.loadSubjects(); });
    },
    onToggle: (node, toggled) => {
      instance.props.actions.loadSubjectsChildren(node, toggled);
    },
    onSubmit: () => { },
    onFailed: () => { },
    render: function render() {
      return (<CatalogingSubjectsBody
        onSubmit={instance.onSubmit}
        onFailed={instance.onFailed}
        tree={instance.tree}
        create={instance.create}
        formValue={instance.props.formValue}
        subjects={instance.props.subjects}
        onToggle={instance.onToggle} />);
    }
  };
};
