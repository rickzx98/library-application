import { Label, React, Suffix} from '../../imports';

export default [
  {
    field: Suffix.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: Suffix.VALUE, headerComponent: <Label label="LABEL_SUFFIX" />
  }
];
