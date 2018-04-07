import { Vendor } from '../../../types';
import { getLabel } from '../../../utils/';

export default () => ([{
  field: Vendor.ID,
  primaryKey: true,
  skipRender: true
},
{
  field: Vendor.NAME, label: getLabel('LABEL_VENDOR'),
  data: { require: true }
}]);
