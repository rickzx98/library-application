import { Barcode, getLabel } from '../imports';

export default () => ([{
  field: Barcode.ID,
  primaryKey: true,
  skipRender: true
},
{
  group: getLabel('LABEL_ITEM_BARCODE_MASK'),
  field: Barcode.ITEM_LEFT_ALPHA_SYMBOL, label: getLabel('LABEL_LEFT_ALPHA_SYMBOL')
},
{
  group: getLabel('LABEL_ITEM_BARCODE_MASK'),
  field: Barcode.ITEM_RIGHT_ALPHA_SYMBOL, label: getLabel('LABEL_RIGHT_ALPHA_SYMBOL')
},
{
  group: getLabel('LABEL_ITEM_BARCODE_MASK'),
  data: { default: 12 },
  field: Barcode.ITEM_BARCODE_LENGTH, label: getLabel('LABEL_BARCODE_LENGTH')
},
{
  group: getLabel('LABEL_PATRON_BARCODE_MASK'),
  field: Barcode.PATRON_LEFT_ALPHA_SYMBOL, label: getLabel('LABEL_LEFT_ALPHA_SYMBOL')
},
{
  group: getLabel('LABEL_PATRON_BARCODE_MASK'),
  field: Barcode.PATRON_RIGHT_ALPHA_SYMBOL, label: getLabel('LABEL_RIGHT_ALPHA_SYMBOL')
},
{
  group: getLabel('LABEL_PATRON_BARCODE_MASK'),
  data: { default: 4 },
  field: Barcode.PATRON_BARCODE_LENGTH, label: getLabel('LABEL_BARCODE_LENGTH')
}]);
