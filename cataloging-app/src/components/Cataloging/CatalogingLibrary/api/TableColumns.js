import { getLabel, Library} from '../imports';

export default [{
  field: Library.ID,
  primaryKey: true,
  skipRender: true
},
  {field: Library.NAME, label: getLabel('LABEL_LIBRARY')}
];
