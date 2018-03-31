import { Title } from '../../../types';
import { getLabel } from '../../../utils/';

export default () => ([{
  field: Title.ID,
  primaryKey: true,
  skipRender: true
},
{
  field: Title.TITLE, label: getLabel('LABEL_TITLE'),
  data: { require: true }
}]);
