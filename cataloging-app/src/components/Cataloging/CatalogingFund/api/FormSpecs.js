import { getLabel, Fund } from '../imports';

export default () => ([{
  field: Fund.ID,
  primaryKey: true,
  skipRender: true
},
{
  field: Fund.NAME, label: getLabel('LABEL_FUND'),
  data: { require: true }
}]);
