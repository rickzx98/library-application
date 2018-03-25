import { FieldView, FormGroup, HiddenButton } from '../../common/';

import CatalogingLibrary from '../api/CatalogingLibrary';
import { CatalogingLibraryPageBody } from './CatalogingLibraryPageBody';
import { FORM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import { Library } from '../../../types';
import PropTypes from 'prop-types';
import React from 'react';
import { readOnlyWrapper } from '../../../utils/';

const className = (field) => {
  switch (field) {
    case Library.NAME:
      return 'col-sm-6 col-md-5 col-md-offset-right-1';
    case Library.ADDRESS:
      return 'col-sm-12 col-md-6';
    case Library.EMAIL:
      return 'col-sm-6 col-md-5 col-md-offset-right-1';
    case Library.CITY:
      return 'col-sm-3';
    case Library.ZIPCODE:
      return 'col-sm-3';
    case Library.PHONE:
    case Library.FAX:
    case Library.MODEM:
      return 'col-sm-4';
    case Library.DISCUSSION:
    case Library.ALERT_INFO:
      return 'col-sm-12';
    case Library.LIBRARIAN:
    case Library.LIBRARIAN_TITLE:
    case Library.CONTACT_PERSON:
      return 'col-sm-4';
    default:
      return 'col-sm-6';
  }
};

export const CatalogingLibraryForm = ({ catalogingLibrary, readOnly, onSubmit, onFailed }) => {
  return (<CatalogingLibraryPageBody>
    <FluidForm name={FORM_NAME} specs={CatalogingLibrary}
      onSubmit={onSubmit} onFailed={onFailed}
      fieldNode={(field, index) => {
        return (<FormGroup
          invalid={catalogingLibrary.invalid && catalogingLibrary.field === field.name}
          required={field.require}
          key={field.name} label={field.label}
          name={field.name} className={className(field.name, index)}>
          {readOnlyWrapper(<FieldView>{FluidForm.getValue(catalogingLibrary, field.name)}</FieldView>, (<input
            placeholder={field.label} name={field.name}
            value={FluidForm.getValue(catalogingLibrary, field.name)}
            className="form-control" />), readOnly)}
        </FormGroup>);
      }}>
      <HiddenButton />
    </FluidForm>
  </CatalogingLibraryPageBody>);
};

CatalogingLibraryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  catalogingLibrary: PropTypes.object.isRequired,
  readOnly: PropTypes.bool
};
