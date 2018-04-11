import { Currency, getLabel } from '../imports';

export default () => ([{
  field: Currency.ID,
  primaryKey: true,
  skipRender: true
},
{
  field: Currency.NOTE, label: getLabel('LABEL_NOTE'),
  data: { require: true }
},
{
  field: Currency.PREFIX, label: getLabel('LABEL_PREFIX'),
  data: { require: true }
},
{
  field: Currency.SYMBOL, label: getLabel('LABEL_SYMBOL')
}]);
