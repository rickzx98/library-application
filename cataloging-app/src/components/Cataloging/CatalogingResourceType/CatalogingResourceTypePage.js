import { FormSpecs, TableColumns } from './api/';
import { PAGE_NAME } from './constants';
import { CrudPage, getLabel, ResourceType } from './imports';

export const CatalogingResourceTypePage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_RESOURCE_TYPE'),
    icon: 'globe'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-md-4'
  }
});
