import {AuthorFields, SubjectFields} from "./components/";
import {CrudPage, DropdownResourceType, FormTextArea, getLabel, Title, TitleLinks} from "./imports";
import {FormSpecs, TableColumns} from "./api/";

import {PAGE_NAME} from "./constants";

export const CatalogingTitlePage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: "/books-header.jpg",
    label: getLabel("LABEL_TITLE"),
    icon: "book"
  },
  formProps: {
    fieldClass: field => {
      switch (field) {
        case Title.SUBJECTS:
          return "col-sm-9 col-sm-offset-right-3";
        case Title.SUMMARY:
        case Title.GENERAL_NOTE:
        case Title.STUDY_PROGRAM:
          return "col-sm-10 col-sm-offset-right-2";
        case Title.READING_LEVEL:
          return "col-sm-4 col-sm-offset-right-2";
        case Title.TITLE_POINTS:
          return "col-sm-4 col-sm-offset-right-2";
        case Title.INTERNET_RESOURCE:
          return "col-sm-6";
        case Title.RESOURCE_TYPE:
          return "col-sm-4 col-ms-offset-right-2";
        default:
          return "col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8";
      }
    },
    fieldComponent: field => {
      switch (field) {
        case Title.AUTHOR:
          return AuthorFields;
        case Title.SUBJECTS:
          return SubjectFields;
        case Title.RESOURCE_TYPE:
          return DropdownResourceType;
        case Title.SUMMARY:
        case Title.GENERAL_NOTE:
          return FormTextArea;
        default:
          return false;
      }
    },
    viewComponent: field => {
      switch (field) {
        case Title.AUTHOR:
          return AuthorFields;
        case Title.SUBJECTS:
          return SubjectFields;
        case Title.SUMMARY:
        case Title.GENERAL_NOTE:
          return FormTextArea;
        case Title.RESOURCE_TYPE:
          return DropdownResourceType;
        default:
          return false;
      }
    }
  },
  links: new TitleLinks('title').getLinks(),
  tabbed: true
});
