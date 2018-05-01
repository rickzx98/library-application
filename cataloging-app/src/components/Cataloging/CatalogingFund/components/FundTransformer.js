import {Fund} from '../imports';

export const viewTransformer = (funds, value) => {
  const filtered = funds.filter(fund => fund[Fund.ID] === value);
  return filtered && filtered[0] ? filtered[0][Fund.NAME] : "";
};
