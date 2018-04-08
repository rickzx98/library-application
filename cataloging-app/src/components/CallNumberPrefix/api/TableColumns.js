import { Label } from '../../common/';
import { Prefix } from '../../../types/';
import React from 'react';
export default [
  {
    field: Prefix.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: Prefix.VALUE, headerComponent: <Label label="LABEL_PREFIX" />
  }
];
