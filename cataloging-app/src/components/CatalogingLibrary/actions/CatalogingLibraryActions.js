import * as types from './';

import { FluidApi, FluidForm } from 'fluid-commons';
import { Library, Pages } from '../../../types/';

import { AjaxStatusActions } from '../../AjaxStatus/';
import { DialogActions } from '../../Dialog/';
import { FORM_NAME } from '../constants';
import { HeaderActions } from '../../Headers/';
import { NotificationActions } from '../../Notification/';
import { PageActions } from '../../Page/';
import { getLabel } from '../../../utils/';
import { push } from 'react-router-redux';

export function removeLibrary(id) {
  return dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    FluidApi.execute('deleteLibrary', { id })
      .then(() => {
        dispatch(NotificationActions.alertSuccess(getLabel('LABEL_DELETE_LIBRARY_SUCCESS')));
        dispatch(AjaxStatusActions.ajaxCallSuccess());
        dispatch(PageActions.prevPage(FORM_NAME));
      })
      .catch(error => {
        dispatch(AjaxStatusActions.ajaxCallError(error));
        dispatch(NotificationActions.alertDanger(getLabel('LABEL_FAILED_TO_DELETE_LIBRARY')));
      });
  };
}

export function createLibrary(library) {
  return dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    FluidApi.execute('createLibrary', { input: library })
      .then(({ createLibrary }) => {
        const data = createLibrary('data')();
        dispatch(addLibrary(data));
        dispatch(NotificationActions.alertSuccess(getLabel('LABEL_CREATE_LIBRARY_SUCCESS')));
        dispatch(AjaxStatusActions.ajaxCallSuccess());
        dispatch(PageActions.prevPage(FORM_NAME));
      })
      .catch(error => {
        dispatch(AjaxStatusActions.ajaxCallError(error));
        dispatch(NotificationActions.alertDanger(getLabel('LABEL_FAILED_TO_CREATE_LIBRARY')));
      });
  };
}
export function loadLibraries() {
  return dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    FluidApi.execute('getLibraries')
      .then(({ getLibraries }) => {
        const data = getLibraries('data')();
        dispatch(setLibraries(data));
        dispatch(AjaxStatusActions.ajaxCallSuccess());
      })
      .catch(error => {
        dispatch(AjaxStatusActions.ajaxCallError(error));
        dispatch(NotificationActions.alertDanger(getLabel('LABEL_LOADING_LIBRARY_FAILED')));
      });
  };
}
export function loadLibraryById(id) {
  return dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    FluidApi.execute('getLibraryById', { id })
      .then(({ getLibraryById }) => {
        const data = getLibraryById('data')();
        FluidForm.load(FORM_NAME, data);
        dispatch(AjaxStatusActions.ajaxCallSuccess());
      })
      .catch(error => {
        dispatch(AjaxStatusActions.ajaxCallError(error));
        dispatch(NotificationActions.alertDanger(getLabel('LABEL_LOADING_LIBRARY_FAILED')));
      });
  };
}
export function setLibraries(libraries) {
  return {
    type: types.SET_LIBRARIES,
    payload: libraries
  };
}

export function goToLibrary(library) {
  return dispatch => {
    dispatch(push(Pages.viewLibrary + library[Library.ID]));
  };
}

export function goToNewLibrary() {
  return dispatch => {
    dispatch(push(Pages.newLibrary));
  };
}


export function createHeaders(controls) {
  return dispatch => {
    dispatch(HeaderActions.setHeaderControls(controls));
  };
}

export function onFailed(stack) {
  return dispatch => {
    dispatch(PageActions.onFailed(stack, FORM_NAME));
  };
}

export const addLibrary = (library) => {
  return {
    type: types.ADD_LIBRARY,
    payload: library
  };
};

export const prevPage = () => {
  return dispatch => {
    dispatch(PageActions.prevPage(FORM_NAME));
  };
};

export const cancelChanges = (id, cancel) => {
  return (dispatch, state) => {
    const { fluidForm } = state();
    const form = fluidForm[FORM_NAME];
    if (form.touched) {
      dispatch(DialogActions.openCancelConfirmation(() => {
        dispatch(cancelConfirm(id));
        cancel();
      }, () => {
        dispatch(DialogActions.closeDialog());
      }));
    } else {
      cancel();
    }
  };
};

export const cancelConfirm = (id) => {
  return dispatch => {
    dispatch(loadLibraryById(id));
    dispatch(DialogActions.closeDialog());
  };
};


export const deleteLibrary = (id) => {
  return (dispatch, state) => {
    const { fluidForm } = state();
    const form = fluidForm[FORM_NAME];
    dispatch(DialogActions.openDeleteConfirmation(() => {
      dispatch(removeLibrary(id));
      dispatch(DialogActions.closeDialog());
    }, undefined,
      form.data[Library.NAME]));
  };
};
