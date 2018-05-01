import {Library} from '../imports';

export const viewTransformer = (libraries, value) => {
  const filtered = libraries.filter(library => library[Library.ID] === value);
  return filtered && filtered[0] ? filtered[0][Library.NAME] : "";
};
