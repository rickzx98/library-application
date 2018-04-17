import { getLabel, ResourceType } from '../imports';

export default () => ([
  {
    field: ResourceType.ID,
    skipRender: true,
    primaryKey: true
  },
  {
    field: ResourceType.VALUE,
    label: getLabel('LABEL_RESOURCE_TYPE'),
    data: {
      require: true
    }
  }
]);
