import '../../images/library-header.jpg';

import { FormSpecs, TableColumns } from './api/';

import { CrudPage } from '../Page/';
import { Library } from '../../types/';
import { PAGE_NAME } from './constants';
import { getLabel } from '../../utils/';

export const CatalogingLibraryPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/library-header.jpg',
    label: getLabel('LABEL_LIBRARY'),
    icon: 'book'
  },
  formProps: {
    fieldClass: (field) => {
      switch (field) {
        case Library.NAME:
          return 'col-sm-6 col-md-5 col-md-offset-right-1';
        case Library.ADDRESS:
          return 'col-sm-12 col-md-6';
        case Library.EMAIL:
          return 'col-sm-6 col-md-5 col-md-offset-right-1';
        case Library.CITY:
          return 'col-sm-3';
        case Library.ZIPCODE:
          return 'col-sm-3';
        case Library.PHONE:
        case Library.FAX:
        case Library.MODEM:
          return 'col-sm-4';
        case Library.DISCUSSION:
        case Library.ALERT_INFO:
          return 'col-sm-12';
        case Library.LIBRARIAN:
        case Library.LIBRARIAN_TITLE:
        case Library.CONTACT_PERSON:
          return 'col-sm-4';
        default:
          return 'col-sm-6';
      }
    }
  }
});
