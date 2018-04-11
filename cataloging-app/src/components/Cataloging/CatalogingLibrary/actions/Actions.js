import { Pages, push } from '../imports';

export function goToCollection() {
  return dispatch => {
    dispatch(push(Pages.collection));
  };
}

export function goToLibrary() {
  return dispatch => {
    dispatch(push(Pages.library));
  };
}

export function goToLibrarian() {
  return dispatch => {
    dispatch(push(Pages.librarian));
  };
}
