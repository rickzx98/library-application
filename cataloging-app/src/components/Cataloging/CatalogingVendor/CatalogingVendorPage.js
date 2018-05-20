import { CrudPage, TitleLinks, getLabel } from './imports';
import { FormSpecs, TableColumns } from './api/';

import { PAGE_NAME } from './constants';

export const CatalogingVendorPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_VENDOR'),
    icon: 'users'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
  },
  pageLinks: () => new TitleLinks('vendor').getLinks()
});
