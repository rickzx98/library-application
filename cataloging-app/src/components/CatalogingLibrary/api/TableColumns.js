import { Library } from '../../../types/';
import { getLabel } from '../../../utils/';

export default [{
  field: Library.ID,
  primaryKey: true,
  skipRender: true
},
{ field: Library.NAME, label: getLabel('LABEL_LIBRARY') }
];
