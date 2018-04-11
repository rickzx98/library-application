import { BarcodeComponent, Label, getLabel, Page, React, PropTypes, formatItemBarcodeRandomValue, formatPatronBarcodeRandomValue} from '../imports';

export const CatalogingBarcodePreview = ({ group, formValue = {data: {}} }) => (<span className="barcode-preview">
  <div className="heading">
    <Label label="LABEL_PREVIEW"/>
  </div>
  <div className="barcode-content">
    {group === getLabel('LABEL_ITEM_BARCODE_MASK') &&
    <BarcodeComponent width={3} height={100} value={formatItemBarcodeRandomValue(formValue.data)}/>}
    {group === getLabel('LABEL_PATRON_BARCODE_MASK') &&
    <BarcodeComponent width={3} height={100} value={formatPatronBarcodeRandomValue(formValue.data)}/>}
  </div>
</span>);
CatalogingBarcodePreview.propTypes = {
  formValue: PropTypes.object.isRequired,
  group: PropTypes.string.isRequired
};
