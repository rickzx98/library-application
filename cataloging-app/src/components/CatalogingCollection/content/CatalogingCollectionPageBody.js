import { Page } from '../../common/';
import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../utils/';

export const CatalogingCollectionPageBody = ({ children }) => {
  return (<Page icon="book" label={getLabel('LABEL_COLLECTION')} banner="/subject-header.jpg">
    {children}
  </Page>);
};

CatalogingCollectionPageBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
};
