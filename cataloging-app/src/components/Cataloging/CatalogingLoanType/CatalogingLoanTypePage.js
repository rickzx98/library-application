import {FormSpecs, TableColumns} from './api/';
import {PAGE_NAME} from './constants';
import {CrudPage, getLabel, LibraryLinks, FormInputNumber, LoanType, FormYesOrNO} from './imports';

export const CatalogingLoanTypePage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/books-header.jpg',
    label: getLabel('LABEL_LOAN_TYPE'),
    icon: 'bolt'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-md-4',
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
  links: new LibraryLinks('loantype').getLinks()
});
