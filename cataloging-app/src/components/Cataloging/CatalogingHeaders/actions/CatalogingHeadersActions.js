import { push, Pages } from '../imports';

export function goToCollection() {
  return dispatch => {
    dispatch(push(Pages.collection));
  };
}

export function goToTitles() {
  return dispatch => {
    dispatch(push(Pages.titles));
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
