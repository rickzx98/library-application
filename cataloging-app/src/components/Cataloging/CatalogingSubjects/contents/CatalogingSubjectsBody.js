import { Page, PropTypes, React, getLabel } from '../imports';

import { CatalogingSubjectForm } from './CatalogingSubjectForm';
import { CatalogingSubjectTree } from './CatalogingSubjectTree';

export const CatalogingSubjectsBody = ({ formValue, onToggle, subjects, createWithParent, tree,
  create, onSubmit, onFailed, view }) => {
  return (<Page icon="leanpub" label={getLabel('LABEL_SUBJECTS')} banner="/subject-header.jpg">
    {tree(() => (<CatalogingSubjectTree subjects={subjects} onToggle={onToggle}/>))}
    {createWithParent(({parent})=> (
      <CatalogingSubjectForm parent={parent} formValue={formValue} onSubmit={onSubmit} onFailed={onFailed}/>))}
    {create(() => (<CatalogingSubjectForm formValue={formValue} onSubmit={onSubmit} onFailed={onFailed}/>))}
    {view(() => (<CatalogingSubjectForm formValue={formValue} onSubmit={onSubmit} onFailed={onFailed}/>))}
  </Page>);
};
CatalogingSubjectsBody.propTypes = {
  subjects: PropTypes.array,
  createWithParent: PropTypes.func.isRequired,
  view: PropTypes.func.isRequired,
  tree: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  formValue: PropTypes.object
};
