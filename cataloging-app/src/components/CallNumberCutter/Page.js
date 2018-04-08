import '../../images/subject-header.jpg';

import { FormSpecs, TableColumns } from './api/';

import { CrudPage } from '../Page/';
import { PAGE_NAME } from './constants';
import { getLabel } from '../../utils/';

export const Page = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/subject-header.jpg',
    label: getLabel('LABEL_PREFIX'),
    icon: 'phone'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
  }
});
