import { Fund } from '../../../types/';
import { getLabel } from '../../../utils/';

export default [{
  field: Fund.ID,
  primaryKey: true,
  skipRender: true
},
{
  field: Fund.NAME, label: getLabel('LABEL_FUND')
}];
