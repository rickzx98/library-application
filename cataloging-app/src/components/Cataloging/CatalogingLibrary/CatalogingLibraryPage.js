import { CreateLinkComponent, CrudPage, Library, LibraryLinks, getLabel, triggerCommands } from './imports';
import { FormSpecs, TableColumns } from './api/';

import { DropdownLibrarian } from '../CatalogingLibrarian/';
import { PAGE_NAME } from './constants';

export const CatalogingLibraryPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/library-header.jpg',
    label: getLabel('LABEL_LIBRARY'),
    icon: 'book'
  },
  formProps: {
    fieldClass: (field) => {
      switch (field) {
        case Library.NAME:
          return 'col-sm-6 col-md-5 col-md-offset-right-1';
        case Library.ADDRESS:
          return 'col-sm-12 col-md-6';
        case Library.EMAIL:
          return 'col-sm-6 col-md-5 col-md-offset-right-1';
        case Library.CITY:
          return 'col-sm-3';
        case Library.ZIPCODE:
          return 'col-sm-3';
        case Library.PHONE:
        case Library.FAX:
        case Library.MODEM:
          return 'col-sm-4';
        case Library.DISCUSSION:
        case Library.ALERT_INFO:
          return 'col-sm-12';
        case Library.LIBRARIAN:
        case Library.CONTACT_PERSON:
          return 'col-sm-6';
        default:
          return 'col-sm-6';
      }
    },
    fieldComponent: (field) => {
      switch (field) {
        case Library.LIBRARIAN:
          return DropdownLibrarian;
        default:
          return false;
      }
    },
    viewComponent: (field) => {
      switch (field) {
        case Library.LIBRARIAN:
          return DropdownLibrarian;
        default:
          return false;
      }
    }
  },
  pageLinks: (page) => {
    const links = new LibraryLinks("library").getLinks();
    if (page === "list") {
      links.unshift({
        name: "searchLibrary",
        component: CreateLinkComponent("LinkSearch", {
          pageName: PAGE_NAME,
          label: getLabel("LABEL_SEARCH_RECORDS"),
          name: Library.NAME,
          fluidLink: triggerCommands(PAGE_NAME)
        })
      });
    }
    return links;
  }
});
