import { CatalogingLibraryPageBody } from './CatalogingLibraryPageBody';
import { FluidTable } from 'fluid-commons';
import LibraryColumns from '../api/CatalogingLibraryColumns';
import PropTypes from 'prop-types';
import React from 'react';
export const CatalogingLibraryList = ({ data, onSelect }) => {
  return (<CatalogingLibraryPageBody >
    <FluidTable name="LibraryTable"
      onSelect={onSelect}
      className="table table-condensed table-hover"
      columns={LibraryColumns} value={data} />
  </CatalogingLibraryPageBody>);
};

CatalogingLibraryList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
