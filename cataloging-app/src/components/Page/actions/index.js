import * as types from './types';

import { FluidApi, FluidForm } from 'fluid-commons';
import { getLabel, getRequireMessage } from '../../../utils/';
import { goBack, push } from 'react-router-redux';
import { HeaderActions } from '../../Headers/';
import { AjaxStatusActions } from '../../AjaxStatus/';
import { DialogActions } from '../../Dialog/';
import { NotificationActions } from '../../Notification/';

export const onFailed = (stack, formName) => {
  return dispatch => {
    const { message, field } = getRequireMessage(stack.error.message);
    FluidForm.invalid(formName, field, message);
    dispatch(NotificationActions.alertDanger(message));
  };
};

export const prevPage = (currentForm) => {
  return (dispatch, state) => {
    const { fluidForm } = state();
    const form = fluidForm[currentForm];
    if (form.touched) {
      dispatch(DialogActions.openCancelConfirmation(() => {
        dispatch(goBack());
      }, () => {
        dispatch(DialogActions.closeDialog());
      }));
    } else {
      dispatch(goBack());
    }
  };
};


export const add = pageName => dispatch => {
  dispatch(push(`${pageName}/new`));
};
export const view = (pageName, id) => dispatch => {
  dispatch(push(`${pageName}/view/${id}`));
};
export const load = (pageName, transformer) => dispatch => {
  FluidApi.execute('getListData', {pageName})
    .then(({ getListData }) => {
      const data = getListData('data')()[pageName];
      if (transformer) {
        if (transformer instanceof Promise) {
          transformer.then(transformedData => {
            dispatch(setListData(pageName, transformedData));
            dispatch(AjaxStatusActions.ajaxCallSuccess());
          }).catch(error => {
            dispatch(AjaxStatusActions.ajaxCallError(error));
            dispatch(NotificationActions.alertDanger(getLabel(`LABEL_LOADING_${pageName}_LIST_FAILED`)));
          });
        } else {
          dispatch(setListData(pageName, transformer(data)));
          dispatch(AjaxStatusActions.ajaxCallSuccess());
        }
      } else {
        dispatch(setListData(pageName, data));
        dispatch(AjaxStatusActions.ajaxCallSuccess());
      }

    })
    .catch(error => {
      dispatch(AjaxStatusActions.ajaxCallError(error));
      dispatch(NotificationActions.alertDanger(getLabel(`LABEL_LOADING_${pageName}_LIST_FAILED`)));
    });
};


export const setListData = (pageName, listData) => ({
  type: types.SET_LIST_DATA,
  pageName,
  payload: listData
});


export function createHeaders(controls) {
  return dispatch => {
    dispatch(HeaderActions.setHeaderControls(controls));
  };
}
