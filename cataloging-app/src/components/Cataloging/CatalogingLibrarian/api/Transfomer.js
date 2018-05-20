import { FluidApi, Librarian } from '../imports';

import { PAGE_NAME } from "../constants";

export const transformActiveField = (value) => {
  switch (value) {
    case true:
    case 'true':
      return 'yes';
    default:
      return 'no';
  }
};

export const transformLibrarianView = (value) => new Promise((resolve, reject) => {
  try {
    if (!value[Librarian.ID]) {
      FluidApi.storage(PAGE_NAME).then(({ data }) => {
        resolve(data().filter(librarian => librarian[Librarian.ID] === value)[0]);
      }).catch(error => {
        reject(error);
      });
    }
  } catch (error) {
    reject(error);
  }
});

export const transformLibrarianEdit = (value) => {
  if (value) {
    if (value[Librarian.ID]) {
      return value[Librarian.ID];
    } else {
      return value;
    }
  }
};
