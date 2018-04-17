import { PageForm, PropTypes, React, Subject } from '../imports';
import { ParentFormField } from '../components/ParentFormField';
import { FormSpecs } from '../api/';
import { PAGE_NAME } from '../constants';

export const CatalogingSubjectForm = ({ formValue, onSubmit, onFailed }) => {
  return (<div className="page-form clearfix"><PageForm
    fieldClass={() => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'}
    fieldComponent={(field)=> {
      switch(field){
        case Subject.PARENT:
          return ParentFormField;
        default:
          return false;
      }
    }}
    formName={PAGE_NAME}
    onSubmit={onSubmit}
    onFailed={onFailed}
    formValue={formValue}
    formSpecs={FormSpecs}/></div>);
};
CatalogingSubjectForm.propTypes = {
  formValue: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired
};
