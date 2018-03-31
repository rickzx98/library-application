import { Librarian } from '../../../types';
import { getLabel } from '../../../utils';
import { transformActiveField } from './Transfomer';
export default [
  {
    field: Librarian.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: Librarian.NAME,
    label: getLabel('LABEL_NAME'),
  }, {
    field: Librarian.TITLE,
    label: getLabel('LABEL_TITLE'),
  }, {
    field: Librarian.EMAIL,
    label: getLabel('LABEL_EMAIL'),
  }, {
    field: Librarian.ACTIVE,
    label: getLabel('LABEL_ACTIVE'),
    transform: transformActiveField
  }];
