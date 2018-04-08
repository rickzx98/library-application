import { Label } from '../../common/';
import React from 'react';
import { Suffix } from '../../../types/';
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
