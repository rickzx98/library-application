import { Barcode, Label } from '../../common/';
import { formatItemBarcodeRandomValue, formatPatronBarcodeRandomValue, getLabel } from '../../../utils/';

import PropTypes from 'prop-types';
import React from 'react';

export const CatalogingBarcodePreview = ({ group, formValue = { data: {} } }) => (<span className="barcode-preview">
  <div className="heading">
    <Label label="LABEL_PREVIEW" />
  </div>
  <div className="barcode-content">
    {group === getLabel('LABEL_ITEM_BARCODE_MASK') && <Barcode width={3} height={100} value={formatItemBarcodeRandomValue(formValue.data)} />}
    {group === getLabel('LABEL_PATRON_BARCODE_MASK') && <Barcode width={3} height={100} value={formatPatronBarcodeRandomValue(formValue.data)} />}
  </div>
</span>);
CatalogingBarcodePreview.propTypes = {
  formValue: PropTypes.object.isRequired,
  group: PropTypes.string.isRequired
};
