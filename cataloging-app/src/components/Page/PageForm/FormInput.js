import { FluidForm } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';
export const FormInput = ({
  formValue,
  field,
  FieldComponent
}) => {
  let element = (<input
    placeholder={field.label} name={field.name}
    value={FluidForm.getValue(formValue, field.name)}
    className="form-control" />);
  if (FieldComponent) {
    element = FieldComponent()({ formValue, field });
  }
  return element;
};

FormInput.propTypes = {
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object,
  FieldComponent: PropTypes.func
};
