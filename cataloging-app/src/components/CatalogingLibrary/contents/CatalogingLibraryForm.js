import { FormGroup, HiddenButton } from '../../common/';

import CatalogingLibrary from '../api/CatalogingLibrary';
import { CatalogingLibraryPageBody } from './CatalogingLibraryPageBody';
import { FluidForm } from 'fluid-commons';
import { Library } from '../../../types/';
import PropTypes from 'prop-types';
import React from 'react';

const isRequired = (field) => (field === Library.NAME ||
  field === Library.LIBRARIAN);

const className = (field, index) =>
  (`${index === 1 ? 'col-sm-12' :
    index > 1 && index < 4 ? 'col-sm-6' :
      index > 2 && index < 7 ? 'col-sm-4' :
        index === 7 ? 'col-sm-6 col-sm-offset-right-6' :
          index >= 8 && index <= 9 ? 'col-sm-6' :
            index > 10 && index < 13 ? 'col-sm-12' :
              'col-sm-6'}`);

export const CatalogingLibraryForm = ({ catalogingLibrary }) => {
  return (<CatalogingLibraryPageBody>
    <div className="col-md-7">
      <FluidForm name="catalogingLibrary" specs={CatalogingLibrary}>
        {catalogingLibrary && catalogingLibrary.data && Object.keys(catalogingLibrary.data).map((field, index) => {
          const required = isRequired(field);
          return (<FormGroup required={required} key={field} label={FluidForm.getLabel(catalogingLibrary, field)} name={field}
            className={className(field, index)}>
            <input required={required} placeholder={FluidForm.getLabel(catalogingLibrary, field)} name={field}
              value={FluidForm.getValue(catalogingLibrary, field)}
              className="form-control" />
          </FormGroup>);
        })}
        <HiddenButton />
      </FluidForm>
    </div>
  </CatalogingLibraryPageBody>);
};

CatalogingLibraryForm.propTypes = {
  catalogingLibrary: PropTypes.object.isRequired
};
