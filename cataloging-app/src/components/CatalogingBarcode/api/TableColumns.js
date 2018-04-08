import { Currency } from '../../../types/';
import { getLabel } from '../../../utils/';

export default [{
  field: Currency.ID,
  primaryKey: true,
  skipRender: true
},
{
  field: Currency.NOTE, label: getLabel('LABEL_NOTE')
},
{
  field: Currency.PREFIX, label: getLabel('LABEL_PREFIX')
}];
