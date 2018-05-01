import {Vendor} from '../imports';

export const viewTransformer = (vendors, value) => {
  const filtered = vendors.filter(vendor => vendor[Vendor.ID] === value);
  return filtered && filtered[0] ? filtered[0][Vendor.NAME] : "";
};
