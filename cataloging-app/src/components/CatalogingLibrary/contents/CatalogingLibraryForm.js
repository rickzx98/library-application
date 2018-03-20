import CatalogingLibrary from '../api/CatalogingLibrary';
import { CatalogingLibraryPageBody } from './CatalogingLibraryPageBody';
import { FluidForm } from 'fluid-commons';
import { FormGroup } from '../../common/';
import { Library } from '../../../types/';
import PropTypes from 'prop-types';
import React from 'react';
import { getValue } from '../../../utils/';
export const CatalogingLibraryForm = ({ data }) => {
  return (<CatalogingLibraryPageBody>
    <FluidForm name="catalogingLibrary" specs={CatalogingLibrary}>
      <FormGroup required={true} className="col-sm-6" label={data[Library.NAME].label}>
        <input name={Library.NAME} value={getValue(data, Library.NAME)} className="form-control" />
      </FormGroup>
    </FluidForm></CatalogingLibraryPageBody>);
};

CatalogingLibraryForm.propTypes = {
  data: PropTypes.object.isRequired
};
