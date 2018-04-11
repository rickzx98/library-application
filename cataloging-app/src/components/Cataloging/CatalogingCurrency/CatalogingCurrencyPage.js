import { FormSpecs, TableColumns } from './api/';
import { CrudPage, getLabel } from './imports';
import { PAGE_NAME } from './constants';

export const CatalogingCurrencyPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_CURRENCY'),
    icon: 'money'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
  }
});
