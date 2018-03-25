import { FieldView, FormGroup, HiddenButton } from '../../common/';

import { CatalogingCollectionPageBody } from './CatalogingCollectionPageBody';
import CollectionForm from '../api/CollectionForm';
import { FORM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';
import { readOnlyWrapper } from '../../../utils/';

export const CatalogingCollectionForm = ({ data, ajax, onSubmit, onFailed, readOnly }) => (
  <CatalogingCollectionPageBody>
    <FluidForm name={FORM_NAME} specs={CollectionForm} onSubmit={onSubmit} onFailed={onFailed}
      fieldNode={(field) => {
        return (<FormGroup required={field.require}
          key={field.name} label={field.label}
          name={field.name} className="col-sm-4">
          {readOnlyWrapper(<FieldView>{FluidForm.getValue(data, field.name)}</FieldView>,
            (<input disabled={ajax.started}
              placeholder={field.label} name={field.name}
              value={FluidForm.getValue(data, field.name)}
              className="form-control" />), readOnly)}
        </FormGroup>);
      }}>

      <HiddenButton />
    </FluidForm></CatalogingCollectionPageBody>);


CatalogingCollectionForm.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  ajax: PropTypes.object.isRequired,
  readOnly: PropTypes.bool.isRequired
};
