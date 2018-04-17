import { FormSpecs, TableColumns } from './api/';
import { PAGE_NAME } from './constants';
import { CrudPage, getLabel, LibraryLinks } from './imports';

export const CatalogingLoanTypePage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_LOAN_TYPE'),
    icon: 'bolt'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-md-4'
  },
  links: new LibraryLinks('loantype').getLinks()
});
