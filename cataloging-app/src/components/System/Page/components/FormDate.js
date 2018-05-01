import {FluidForm, PropTypes, React, DatePicker} from '../imports';

export const FormDate = ({field, formValue}) => {
  return (<DatePicker
    placeholder={field.label} name={field.name} className="form-input-number form-control"
    selected={FluidForm.getValue(formValue, field.name)}/>);
};
FormDate.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  formValue: PropTypes.object.isRequired
};
