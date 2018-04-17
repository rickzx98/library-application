import { getLabel, ResourceType } from '../imports';

export default [{
  field: ResourceType.ID,
  primaryKey: true,
  skipRender: true
},
  {field: ResourceType.VALUE, label: getLabel('LABEL_RESOURCE_TYPE')}
];
