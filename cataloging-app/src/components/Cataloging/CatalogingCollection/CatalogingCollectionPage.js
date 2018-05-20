import { AddTitles, CollectionTitles } from "./components/";
import { Collection, CreateLinkComponent, CrudPage, LibraryLinks, getLabel, triggerCommands } from "./imports";
import { FormSpecs, TableColumns } from "./api/";

import { PAGE_NAME } from "./constants";
import commands from "./commands/";

export const CatalogingCollectionPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: "/subject-header.jpg",
    label: getLabel("LABEL_COLLECTION"),
    icon: "tags"
  },
  formProps: {
    fieldComponent: field => {
      switch (field) {
        case Collection.TITLES:
          return CollectionTitles;
        default:
          return false;
      }
    },
    fieldClass: () => "col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8"
  },
  pageLinks: (page, { editable }) => {
    const links = new LibraryLinks("collection").getLinks();
    if (page === "list") {
      links.unshift({
        name: "searchCollection",
        component: CreateLinkComponent("LinkSearch", {
          pageName: PAGE_NAME,
          label: getLabel("LABEL_SEARCH_RECORDS"),
          name: Collection.NAME,
          fluidLink: triggerCommands(PAGE_NAME)
        })
      });
    } else if (page === "view" && editable) {
      links.unshift({
        name: "addTitles",
        component: AddTitles
      });
    }
    return links;
  }
}, commands);
