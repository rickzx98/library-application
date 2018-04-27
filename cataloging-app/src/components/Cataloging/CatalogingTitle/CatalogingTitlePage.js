import {AuthorFields, SubjectFields} from './components/';
import {CrudPage, Title, getLabel} from './imports';
import {FormSpecs, TableColumns} from './api/';

import {PAGE_NAME} from './constants';
import {TitleLinks} from './TitleLinks';

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
    fieldClass: () => 'col-sm-8 col-sm-offset-right-4',
    fieldComponent: (field) => {
      switch (field) {
        case Title.AUTHOR:
          return AuthorFields;
        case Title.SUBJECTS:
          return SubjectFields;
        default:
          return false;
      }
    },
    viewComponent: (field) => {
      switch (field) {
        case Title.AUTHOR:
          return AuthorFields;
        case Title.SUBJECTS:
          return SubjectFields;
        default:
          return false;
      }
    }
  },
  links: new TitleLinks().getLinks(),
  tabbed: true
});
