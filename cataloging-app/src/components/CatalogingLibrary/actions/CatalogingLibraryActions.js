import * as types from './';

import { FluidApi, FluidForm } from 'fluid-commons';
import { Library, Pages } from '../../../types/';

import { AjaxStatusActions } from '../../AjaxStatus/';
import { FORM_NAME } from '../constants';
import { HeaderActions } from '../../Headers/';
import { NotificationActions } from '../../Notification/';
import { PageActions } from '../../Page/';
import { getLabel } from '../../../utils/';
import { push } from 'react-router-redux';

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
    dispatch(PageActions.onFailed(stack));
  };
}
