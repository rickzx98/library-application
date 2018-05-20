import { CrudPage, FormInputNumber, FormYesOrNO, LibraryLinks, LoanType, getLabel } from "./imports";
import { FormSpecs, TableColumns } from "./api/";

import { PAGE_NAME } from "./constants";

export const CatalogingLoanTypePage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: "/books-header.jpg",
    label: getLabel("LABEL_LOAN_TYPE"),
    icon: "bolt"
  },
  formProps: {
    fieldClass: () => "col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8",
    fieldComponent: (field) => {
      switch (field) {
        case LoanType.FINE_CYCLE:
        case LoanType.GRACE_PERIOD:
        case LoanType.LOAN_PERIOD:
          return FormInputNumber;
        case LoanType.CAN_LEAVE:
        case LoanType.PER_HOUR:
          return FormYesOrNO;
        default:
          return false;
      }
    }
  },
  pageLinks: () => new LibraryLinks("loantype").getLinks()
});
