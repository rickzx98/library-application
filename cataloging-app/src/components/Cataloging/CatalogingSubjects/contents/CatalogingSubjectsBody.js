import { Page, PropTypes, React, getLabel } from '../imports';

import { CatalogingSubjectForm } from './CatalogingSubjectForm';
import { CatalogingSubjectTree } from './CatalogingSubjectTree';

export const CatalogingSubjectsBody = ({ formValue, onToggle, subjects, tree,
  create, onSubmit, onFailed }) => {
  return (<Page icon="leanpub" label={getLabel('LABEL_SUBJECTS')} banner="/subject-header.jpg">
    {tree(() => (<CatalogingSubjectTree subjects={subjects} onToggle={onToggle} />))}
    {create(() => (<CatalogingSubjectForm formValue={formValue} onSubmit={onSubmit} onFailed={onFailed} />))}
  </Page>);
};
CatalogingSubjectsBody.propTypes = {
  subjects: PropTypes.array,
  tree: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  formValue: PropTypes.object
};
