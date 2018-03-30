import { Collection } from '../../../types/';
import { Label } from '../../common/';
import React from 'react';
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
