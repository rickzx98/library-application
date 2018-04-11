import { Label, React, Prefix } from '../../imports';

export default [
  {
    field: Prefix.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: Prefix.VALUE, headerComponent: <Label label="LABEL_PREFIX"/>
  }
];
