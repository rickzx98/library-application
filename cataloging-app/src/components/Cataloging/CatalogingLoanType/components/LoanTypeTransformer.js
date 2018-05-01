import {LoanType} from '../imports';

export const viewTransformer = (loanTypes, value) => {
  const filtered = loanTypes.filter(loanType => loanType[LoanType.ID] === value);
  return filtered && filtered[0] ? filtered[0][LoanType.NAME] : "";
};
