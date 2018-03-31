import { FieldView, FormGroup, HiddenButton } from '../../common/';

import { FluidForm } from 'fluid-commons';
import { FormInput } from './FormInput';
import PropTypes from 'prop-types';
import React from 'react';
import { readOnlyWrapper } from '../../../utils/';

export const PageForm = ({ formName, formValue,
  formSpecs, readOnly,
  onSubmit, onFailed,
  viewValueTransformer,
  modelValueTransformer,
  fieldClass = () => '',
  fieldComponent }) => {
  return (<FluidForm name={formName} specs={formSpecs}
    onSubmit={(formValue) => _modelValueTransformer(formValue, modelValueTransformer, onSubmit)} onFailed={onFailed}
    fieldNode={(field, index) => {
      return (<FormGroup
        invalid={formValue.invalid && formValue.field === field.name}
        required={field.require}
        key={field.name} label={field.label}
        name={field.name}
        className={fieldClass(field.name, index)}>
        {readOnlyWrapper(<FieldView>{FluidForm.getValue(formValue, field.name, viewValueTransformer ? viewValueTransformer(field.name) : false)}</FieldView>,
          (<FormInput
            FieldComponent={fieldComponent}
            field={field}
            formValue={formValue} />), readOnly)}
      </FormGroup>);
    }}>
    <HiddenButton />
  </FluidForm>);
};
function _modelValueTransformer(formValue, transformer, onSubmit) {
  if (transformer) {
    let raw = transformer(formValue.getRaw());
    formValue.getRaw = () => raw;
    formValue = { ...formValue, raw };
  }
  onSubmit(formValue);
}
PageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
  formName: PropTypes.string.isRequired,
  formSpecs: PropTypes.func.isRequired,
  fieldClass: PropTypes.func,
  fieldComponent: PropTypes.func,
  viewValueTransformer: PropTypes.func,
  modelValueTransformer: PropTypes.func
};
