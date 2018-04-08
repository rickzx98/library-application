import { Cutter } from '../../../types/';
import { Label } from '../../common/';
import React from 'react';
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
