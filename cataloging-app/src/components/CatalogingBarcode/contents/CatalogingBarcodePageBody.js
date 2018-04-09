import { Page } from '../../common/';
import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../utils/';
export const CatalogingBarcodePageBody = ({ children }) => (<Page
  className="barcode-page"
  icon="barcode"
  label={getLabel('LABEL_BARCODE')}
  banner="/settings-header.jpg">{children}</Page>);

CatalogingBarcodePageBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};
