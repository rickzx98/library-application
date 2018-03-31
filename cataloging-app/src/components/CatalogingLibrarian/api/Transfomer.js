import { Librarian } from '../../../types/';

export const transformActiveField = (value) => {
  switch (value) {
    case true:
    case 'true':
      return 'yes';
    default:
      return 'no';
  }
};

export const transformLibrarianView = (value) => {
  if (value) {
    if (value[Librarian.ID]) {
      return value[Librarian.NAME];
    } else {
      return value;
    }
  }
};
export const transformLibrarianEdit = (value) => {
  if (value) {
    if (value[Librarian.ID]) {
      return value[Librarian.ID];
    } else {
      return value;
    }
  }
};
