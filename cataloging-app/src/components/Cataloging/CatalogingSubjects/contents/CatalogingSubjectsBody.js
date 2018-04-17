import { Page, PropTypes, React, getLabel, PageLinks} from '../imports';

import { CatalogingSubjectForm } from './CatalogingSubjectForm';
import { CatalogingSubjectTree } from './CatalogingSubjectTree';

export const CatalogingSubjectsBody = ({ formValue, onToggle, subjects, createWithParent, tree,
  create, onSubmit, onFailed, view, links, goToUrl}) => {
  return (<Page icon="leanpub" label={getLabel('LABEL_SUBJECTS')} banner="/subject-header.jpg">
    {tree(() => (
      <div className="page-list-with-links">
        {links && links.length > 0 && (<PageLinks
          links={links}
          goToUrl={goToUrl}/>)}
        <div className={`${links && links.length > 0 ? 'col-md-9' : ''}`}>
          <CatalogingSubjectTree subjects={subjects} onToggle={onToggle}/>
        </div>
      </div>))}
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
  formValue: PropTypes.object,
  links: PropTypes.array.isRequired,
  goToUrl: PropTypes.func.isRequired
};
