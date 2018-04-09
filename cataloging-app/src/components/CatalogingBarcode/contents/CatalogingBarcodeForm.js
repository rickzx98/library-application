import { Barcode } from '../../../types/';
import { CatalogingBarcodePreview } from './CatalogingBarcodePreview';
import { FormInputNumber } from '../../common/';
import { FormSpecs } from '../api/';
import { PAGE_NAME } from '../constants';
import { PageTabbedForm } from '../../Page/';
import PropTypes from 'prop-types';
import React from 'react';
export const CatalogingBarcodeForm = ({ onSubmit, onFailed, formValue }) => (<PageTabbedForm
  fieldClass={() => 'col-sm-8 col-sm-offset-right-4'}
  onSubmit={onSubmit}
  onFailed={onFailed}
  formValue={formValue}
  formName={PAGE_NAME}
  fieldComponent={(field) => {
    switch (field) {
      case Barcode.ITEM_BARCODE_LENGTH:
      case Barcode.PATRON_BARCODE_LENGTH:
        return FormInputNumber;
      default:
        return false;
    }
  }}
  formSpecs={FormSpecs} extraContent={group => <CatalogingBarcodePreview group={group} formValue={formValue} />} />);

CatalogingBarcodeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired
};
