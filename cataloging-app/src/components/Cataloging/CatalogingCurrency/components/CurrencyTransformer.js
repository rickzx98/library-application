import {Currency} from '../imports';

export const viewTransformer = (currencies, value) => {
  const filtered = currencies.filter(currency => currency[Currency.ID] === value);
  return filtered && filtered[0] ? filtered[0][Currency.NOTE] : "";
};
