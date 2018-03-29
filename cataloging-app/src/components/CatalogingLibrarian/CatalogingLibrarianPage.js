import '../../images/library-header.jpg';
import { FormSpecs, TableColumns } from './api/';
import { PAGE_NAME } from './constants';
import { CrudPage } from '../Page/';
import { getLabel } from '../../utils/';
export const CatalogingLibrarianPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/library-header.jpg',
    label: getLabel('LABEL_LIBRARIAN'),
    icon: 'book'
  }
});
