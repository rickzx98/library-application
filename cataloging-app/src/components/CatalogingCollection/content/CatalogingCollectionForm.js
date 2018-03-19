import { FormGroup, HiddenButton } from '../../common/';

import { CatalogingCollectionPageBody } from './CatalogingCollectionPageBody';
import { Collection } from '../../../types/';
import CollectionForm from '../api/CollectionForm';
import { FORM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';
import { getValue } from '../../../utils/';

export const CatalogingCollectionForm = ({ data, ajax, onSubmit, onFailed }) => (
  <CatalogingCollectionPageBody>
    <FluidForm name={FORM_NAME} specs={CollectionForm} onSubmit={onSubmit} onFailed={onFailed}>
      <FormGroup label={data[Collection.NAME].label} className="col-sm-4">
        <input placeholder={data[Collection.NAME].label}
          value={getValue(data, Collection.NAME)}
          disabled={ajax.started} className="form-control"
          name={Collection.NAME} />
      </FormGroup>
      <HiddenButton />
    </FluidForm></CatalogingCollectionPageBody>);


CatalogingCollectionForm.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  ajax: PropTypes.object.isRequired
};
