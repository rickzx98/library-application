import { Label, React, Cutter } from '../../imports';

export default [
  {
    field: Cutter.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: Cutter.VALUE, headerComponent: <Label label="LABEL_CUTTER" />
  }
];
