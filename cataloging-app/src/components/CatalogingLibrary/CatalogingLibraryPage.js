import '../../images/library-header.jpg';

import { DropdownLibrarian, transformLibrarianEdit, transformLibrarianView } from '../CatalogingLibrarian/';
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
        case Library.CONTACT_PERSON:
          return 'col-sm-6';
        default:
          return 'col-sm-6';
      }
    },
    fieldComponent: (field) => {
      switch (field) {
        case Library.LIBRARIAN:
          return DropdownLibrarian;
        default:
          return false;
      }
    },
    viewValueTransformer: (field) => {
      switch (field) {
        case Library.LIBRARIAN:
          return transformLibrarianView;
        default: return false;
      }
    },
    modelValueTransformer: (formValue) => ({
      ...formValue,
      librarian: transformLibrarianEdit(formValue[Library.LIBRARIAN])
    })
  },
  links: [
    {
      label: getLabel('LABEL_COLLECTION'),
      name: 'collection',
      icon: 'tags',
      url: '/collection'
    },
    {
      label: getLabel('LABEL_TITLE'),
      name: 'title',
      icon: 'book',
      url: '/title'
    },
    {
      label: getLabel('LABEL_LOAN_TYPE'),
      name: 'loantype',
      icon: 'bolt',
      url: '/loantype'
    },
    {
      label: getLabel('LABEL_BARCODE'),
      name: 'barcode',
      icon: 'barcode',
      url: '/barcode'
    }]
});
