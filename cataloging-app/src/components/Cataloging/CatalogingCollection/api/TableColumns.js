import { Collection, Label, React } from '../imports';
export default [
  {
    field: Collection.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: Collection.NAME, headerComponent: <Label label="LABEL_CURRENT_COLLECTIONS" />
  }
];
