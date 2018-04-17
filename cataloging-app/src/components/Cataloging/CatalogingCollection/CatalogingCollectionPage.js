import { CrudPage, getLabel, LibraryLinks} from './imports';
import { FormSpecs, TableColumns } from './api/';
import { PAGE_NAME } from './constants';

export const CatalogingCollectionPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/subject-header.jpg',
    label: getLabel('LABEL_COLLECTION'),
    icon: 'tags'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
  },
  links: new LibraryLinks('collection').getLinks()
});
