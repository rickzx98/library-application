import * as types from './';

import { AjaxStatusActions } from '../../AjaxStatus/';
import { FluidApi } from 'fluid-commons';
import { NotificationActions } from '../../Notification/';

export function loadLibraries() {
    return dispatch => {
        dispatch(AjaxStatusActions.beginAjaxCall());
    };
}
export function setLibraries(libraries) {
    return {
        type: types.SET_LIBRARIES,
        payload: libraries
    };
}