import { Page, PropTypes, React, getLabel } from '../imports';

export const CatalogingBarcodePageBody = ({ children }) => (<Page
  className="barcode-page page-list-with-links"
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
