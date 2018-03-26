import { Page } from '../../common/';
import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../utils/';

export const CatalogingLibraryPageBody = ({ children }) => {
  return (<Page icon="book" label={getLabel('LABEL_LIBRARIAN')} banner="/library-header.jpg">
    {children}
  </Page>);
};

CatalogingLibraryPageBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
};
