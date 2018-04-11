import { GeneratedBarcode, getLabel } from '../imports';

export default [{
  field: GeneratedBarcode.ID,
  primaryKey: true,
  skipRender: true
},
{
  field: GeneratedBarcode.NUMBER, label: getLabel('LABEL_BARCODE')
},
{
  field: GeneratedBarcode.DESCRIPTION, label: getLabel('LABEL_FOR')
}];
