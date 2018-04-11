import { CrudPage, Librarian, getLabel } from './imports';

import { FormSpecs, TableColumns, transformActiveField } from './api/';
import { DropdownActive } from './components/';
import { PAGE_NAME } from './constants';

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
