import { Page, PropTypes, React, TreeView, getLabel } from '../imports';
export const CatalogingSubjectsBody = ({ onToggle, subjects, tree }) => {
  return (<Page icon="tag" label={getLabel('LABEL_SUBJECTS')} banner="/subject-header.jpg">
    {tree(() => (<TreeView data={subjects} onToggle={onToggle} />))}
  </Page>);
};
CatalogingSubjectsBody.propTypes = {
  subjects: PropTypes.array,
  tree: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};
