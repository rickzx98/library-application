import { getLabel, CrudPage } from './imports';
import { FormSpecs, TableColumns } from './api/';
import { PAGE_NAME } from './constants';

export const CatalogingTitlePage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_TITLE'),
    icon: 'book'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
  },
  links: [{
    name: 'currency',
    label: getLabel('LABEL_CURRENCY'),
    icon: 'money',
    url: '/currency'
  },
    {
      name: 'vendor',
      label: getLabel('LABEL_VENDOR'),
      icon: 'users',
      url: '/vendor'
    },
    {
      name: 'fund',
      label: getLabel('LABEL_FUND'),
      icon: 'university',
      url: '/fund'
    },
    {
      name: 'call-number',
      label: getLabel('LABEL_CALL_NUMBER'),
      icon: 'phone',
      root: true,
      group: 'callNumber'
    },
    {
      name: 'prefix',
      label: getLabel('LABEL_PREFIX'),
      url: '/prefix',
      group: 'callNumber'
    },
    {
      name: 'cutter',
      label: getLabel('LABEL_CUTTER'),
      url: '/cutter',
      group: 'callNumber'
    },
    {
      name: 'suffix',
      label: getLabel('LABEL_SUFFIX'),
      url: '/suffix',
      group: 'callNumber'
    }]
});
