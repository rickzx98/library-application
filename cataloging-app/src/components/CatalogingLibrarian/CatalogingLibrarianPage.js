import '../../images/library-header.jpg';

import { FormSpecs, TableColumns, transformActiveField } from './api/';

import { CrudPage } from '../Page/';
import { DropdownActive } from './components/';
import { Librarian } from '../../types/';
import { PAGE_NAME } from './constants';
import { getLabel } from '../../utils/';

export const CatalogingLibrarianPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/library-header.jpg',
    label: getLabel('LABEL_LIBRARIAN'),
    icon: 'book'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8',
    fieldComponent: (field) => {
      switch (field) {
        case Librarian.ACTIVE:
          return DropdownActive;
        default:
          return false;
      }
    },
    viewValueTransformer: (field) => {
      switch (field) {
        case Librarian.ACTIVE:
          return transformActiveField;
        default:
          return false;
      }
    }
  }
});
