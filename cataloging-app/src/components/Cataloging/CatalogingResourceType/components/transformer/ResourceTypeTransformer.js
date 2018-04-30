import {ResourceType} from '../../imports';

export const viewTransformer = (resourceTypes, value) => {
  if (value) {
    const filtered = resourceTypes.filter(resourceType => resourceType[ResourceType.ID] === value)[0];
    return filtered ? filtered[ResourceType.VALUE] : '';
  }
  return '';
};
