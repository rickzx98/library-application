import {AuthorFields, SubjectFields, CallNumberFields} from "./components/";
import {
  CrudPage,
  DropdownResourceType,
  FormTextArea,
  getLabel,
  Title,
  TitleLinks,
  DropdownLibrary,
  DropdownLoanType,
  FormInputNumber,
  DropdownCurrency,
  DropdownVendor,
  DropdownFund,
  FormDate,
  FLUID_GO_TO_TAB,
  FormImageUploader
} from "./imports";
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
          return "col-sm-9 col-sm-offset-right-3 " +
            "col-md-7 col-md-offset-right-5 " +
            "col-lg-5 col-lg-offset-right-7";
        case Title.SUMMARY:
        case Title.GENERAL_NOTE:
        case Title.STUDY_PROGRAM:
          return "col-sm-12 " +
            "col-md-8 col-md-offset-right-4 " +
            "col-lg-6 col-lg-offset-right-6";
        case Title.READING_LEVEL:
          return "col-sm-6 col-md-3";
        case Title.TITLE_POINTS:
          return "col-sm-6 " +
            "col-md-3 col-md-offset-right-6";
        case Title.INTERNET_RESOURCE:
          return "col-sm-7 col-md-4";
        case Title.RESOURCE_TYPE:
          return "col-sm-5 " +
            "col-md-2 col-md-offset-right-1";
        case Title.CALL_NUMBER:
        case Title.PUBLIC_NOTE:
          return "col-sm-12 " +
            "col-md-10 col-md-offset-right-2 " +
            "col-lg-6 col-lg-offset-right-6";
        case Title.COST:
          return "col-sm-6 col-md-4 col-lg-3";
        case Title.CURRENCY:
          return "col-sm-5 col-sm-offset-right-1 " +
            "col-md-4 col-md-offset-right-3 " +
            "col-lg-3 col-lg-offset-right-6";
        case Title.LOCATION:
           return "col-sm-6 col-md-4 col-lg-3";
        default:
          return "col-sm-6 col-sm-offset-right-6 " +
            "col-md-4 col-md-offset-right-8 " +
            "col-lg-3 col-lg-offset-right-9";
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
        case Title.CALL_NUMBER:
          return CallNumberFields;
        case Title.LOCATION:
          return DropdownLibrary;
        case Title.FORMAT:
          return DropdownLoanType;
        case Title.COST:
          return FormInputNumber;
        case Title.CURRENCY:
          return DropdownCurrency;
        case Title.VENDOR:
          return DropdownVendor;
        case Title.FUND:
          return DropdownFund;
        case Title.PUBLIC_NOTE:
          return FormTextArea;
        case Title.DATE:
          return FormDate;
        case Title.IMAGE_ID:
          return FormImageUploader;
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
        case Title.CALL_NUMBER:
          return CallNumberFields;
        case Title.LOCATION:
          return DropdownLibrary;
        case Title.FORMAT:
          return DropdownLoanType;
        case Title.CURRENCY:
          return DropdownCurrency;
        case Title.VENDOR:
          return DropdownVendor;
        case Title.FUND:
          return DropdownFund;
        case Title.PUBLIC_NOTE:
          return FormTextArea;
        case Title.IMAGE_ID:
          return FormImageUploader;
        default:
          return false;
      }
    }
  },
  pageLinks: (page, {activeKey = 1}) => {
    switch (page) {
      case 'create':
      case 'view':
        return [{
          isVisible: (props, state) => {
            return state.activeKey && state.activeKey > 1;
          },
          name: 'prevTab',
          icon: 'backward',
          label: getLabel("LABEL_PREVIOUS_TAB"),
          fluid: {
            name: `${PAGE_NAME}_${FLUID_GO_TO_TAB}`,
            data: {
              eventKey: activeKey - 1
            }
          }
        }, {
          isVisible: (props, state) => {
            if (props.pageForm && props.pageForm.managed) {
              return !state.activeKey || state.activeKey < 7;
            } else {

              return !state.activeKey || state.activeKey < 6;
            }
          },
          name: "nextTab",
          icon: "forward",
          label: getLabel("LABEL_NEXT_TAB"),
          fluid: {
            name: `${PAGE_NAME}_${FLUID_GO_TO_TAB}`,
            data: {
              eventKey: activeKey + 1
            }
          }
        }];
      default:
        return new TitleLinks('title').getLinks();
    }
  },
  tabbed: true
});
