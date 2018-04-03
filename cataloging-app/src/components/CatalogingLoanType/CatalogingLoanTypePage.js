import '../../images/books-header.jpg';

import { FormSpecs, TableColumns } from './api/';

import { CrudPage } from '../Page/';
import { PAGE_NAME } from './constants';
import { getLabel } from '../../utils/';

export const CatalogingTitlePage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_LOAN_TYPE'),
    icon: 'book'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
  }
});
