import { CatalogingCollectionPageBody } from './CatalogingCollectionPageBody';
import CollectionColumns from '../api/CollectionColumns';
import { FluidTable } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';
export const CatalogingCollectionList = ({ collections, onSelect }) => {
  return (<CatalogingCollectionPageBody >
    <FluidTable name="collectionTable"
      onSelect={onSelect}
      className="table table-condensed table-hover"
      columns={CollectionColumns} value={collections} />
  </CatalogingCollectionPageBody>);
};

CatalogingCollectionList.propTypes = {
  collections: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
