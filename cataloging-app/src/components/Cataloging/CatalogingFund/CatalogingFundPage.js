import { FormSpecs, TableColumns } from './api/';
import { PAGE_NAME } from './constants';
import { CrudPage, getLabel, TitleLinks } from './imports';

export const CatalogingFundPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_FUND'),
    icon: 'university'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
  },
  links: new TitleLinks('fund').getLinks()
});
