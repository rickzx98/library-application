import CatalogingLibrary from '../api/CatalogingLibrary';
import { CatalogingLibraryPageBody } from './CatalogingLibraryPageBody';
import { FluidForm } from 'fluid-commons';
import { FormGroup } from '../../common/';
import PropTypes from 'prop-types';
import React from 'react';
export const CatalogingLibraryForm = ({ catalogingLibrary }) => {
  return (<CatalogingLibraryPageBody>
    <div className="col-md-7">
      <FluidForm name="catalogingLibrary" specs={CatalogingLibrary}>
        {catalogingLibrary && catalogingLibrary.data && Object.keys(catalogingLibrary.data).map((field, index)=> {
          return (<FormGroup label={FluidForm.getLabel(catalogingLibrary, field)} name={field}
                             className={`${ index === 1 ? 'col-sm-12' :
                            index > 1 && index < 4 ? 'col-sm-3':
                            index === 4 ? 'col-sm-offset-2 col-sm-4':
                            index > 3 && index < 8 ? 'col-sm-4':
                            index > 10 && index < 13 ? 'col-sm-12':
                            'col-sm-4'}`}>
            <input placeholder={FluidForm.getLabel(catalogingLibrary, field)} name={field}
                   value={FluidForm.getValue(catalogingLibrary,field)}
                   className="form-control"/>
          </FormGroup>);
        })}
      </FluidForm>
    </div>
  </CatalogingLibraryPageBody>);
};

CatalogingLibraryForm.propTypes = {
  catalogingLibrary: PropTypes.object.isRequired
};
