import { Collection, CrudPage, LibraryLinks, getLabel } from "./imports";
import { FormSpecs, TableColumns } from "./api/";

import { CollectionTitles } from "./components/";
import { PAGE_NAME } from "./constants";

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
  pageLinks: () => new LibraryLinks("collection").getLinks()
});
