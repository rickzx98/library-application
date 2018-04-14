import { CatalogingSubjectsBody } from '../contents/CatalogingSubjectsBody';
import { React } from '../imports';

export default (instance) => {
  instance.state = {};
  return {
    componentWillMount: () => {
      instance.refresh();
    },
    refresh: () => {
      instance.tree(() => { instance.props.actions.loadSubjects(); });
    },
    onToggle: (node, toggled) => {
      instance.props.actions.loadSubjectsChildren(node, toggled);
    },
    render: function render() {
      return (<CatalogingSubjectsBody
        tree={instance.tree}
        subjects={this.props.subjects}
        onToggle={instance.onToggle} />);
    }
  };
};
