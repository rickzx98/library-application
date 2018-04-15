import { Page, PropTypes, React, getLabel } from '../imports';

import { CatalogingSubjectTree } from './CatalogingSubjectTree';

export const CatalogingSubjectsBody = ({ onToggle, subjects, tree }) => {
  return (<Page icon="leanpub" label={getLabel('LABEL_SUBJECTS')} banner="/subject-header.jpg">
    {tree(() => (<CatalogingSubjectTree subjects={subjects} onToggle={onToggle} />))}
  </Page>);
};
CatalogingSubjectsBody.propTypes = {
  subjects: PropTypes.array,
  tree: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};
