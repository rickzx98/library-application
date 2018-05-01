import {FluidForm, PropTypes, React} from '../imports';

export const FormInputNumber = ({field, formValue}) => {
  return (<input type="number" placeholder={field.label} name={field.name} className="form-input-number form-control"
                 value={FluidForm.getValue(formValue, field.name)}/>);
};
FormInputNumber.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  formValue: PropTypes.object.isRequired
};
