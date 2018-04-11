import { getLabel, LoanType } from '../imports';

export default [{
  field: LoanType.ID,
  primaryKey: true,
  skipRender: true
},
{ field: LoanType.NAME, label: getLabel('LABEL_LOAN_TYPE') }
];
