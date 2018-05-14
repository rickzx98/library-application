import {CrudPage, TitleLinks, getLabel, IndexCard} from './imports';
import {FormSpecs, TableColumns} from './api/';

import {PAGE_NAME} from './constants';
import {LayoutEditor, DropdownCardSize} from "./components/";

export const CatalogingIndexCardPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_CARD_CATALOG'),
    icon: 'address-card'
  },
  formProps: {
    fieldComponent: (field) => {
      switch (field) {
        case IndexCard.LAYOUT:
          return LayoutEditor;
        case IndexCard.CARD_SIZE:
          return DropdownCardSize;
        default:
          return false;
      }
    },
    viewComponent: (field) => {
      switch (field) {
        case IndexCard.LAYOUT:
          return LayoutEditor;
        default:
          return false;
      }
    },
    fieldClass: (field) => {
      switch (field) {
        case IndexCard.LAYOUT:
          return "col-sm-12";
        default:
          return 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8';
      }
    }
  },
  links: new TitleLinks(PAGE_NAME).getLinks()
});
