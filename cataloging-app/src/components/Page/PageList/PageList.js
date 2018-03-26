import { FluidTable } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';
export const PageList = ({ data, onSelect, columns }) => {
  return (
    <FluidTable name="LibraryTable"
      onSelect={onSelect}
      className="table table-condensed table-hover"
      columns={columns} value={data} />);
};

PageList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired
};
