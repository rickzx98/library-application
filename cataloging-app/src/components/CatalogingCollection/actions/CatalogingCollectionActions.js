import * as types from './';

import { Collection, Pages } from '../../../types';
import { FluidApi, FluidForm } from 'fluid-commons';

import { AjaxStatusActions } from '../../AjaxStatus/';
import { DialogActions } from '../../Dialog/';
import { FORM_NAME } from '../constants';
import { HeaderActions } from '../../Headers/';
import { NotificationActions } from '../../Notification/';
import { PageActions } from '../../Page/';
import { getLabel } from '../../../utils/';
import { push } from 'react-router-redux';

export const loadCollection = (id) => {
  return dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    return FluidApi.execute('getCollectionById', { id })
      .then(({ getCollectionById }) => {
        const data = getCollectionById().data();
        dispatch(AjaxStatusActions.ajaxCallSuccess());
        FluidForm.load(FORM_NAME, data);
      })
      .catch(error => {
        dispatch(AjaxStatusActions.ajaxCallError(error));
      });
  };
};
export const loadCollections = () => {
  return dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    return FluidApi.execute('getCollections')
      .then(({ getCollections }) => {
        const data = getCollections().data();
        dispatch(AjaxStatusActions.ajaxCallSuccess());
        dispatch(setCollections(data));
      })
      .catch(error => {
        dispatch(AjaxStatusActions.ajaxCallError(error));
      });
  };
};

export const createCollection = (collection) => {
  return dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    FluidApi.execute('createCollection', { input: collection })
      .then(({ createCollection }) => {
        const data = createCollection().data();
        dispatch(addCollection(data));
        dispatch(NotificationActions.alertSuccess(getLabel('LABEL_CREATE_COLLECTION_SUCCESS')));
        dispatch(AjaxStatusActions.ajaxCallSuccess());
        dispatch(PageActions.prevPage());
      })
      .catch(error => {
        dispatch(AjaxStatusActions.ajaxCallError(error));
        dispatch(NotificationActions.alertDanger(getLabel('LABEL_FAILED_TO_CREATE_COLLECTION')));
      });
  };
};

export const updateCollection = (id, collection) => {
  return dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    FluidApi.execute('updateCollection', { id, input: collection })
      .then(() => {
        dispatch(NotificationActions.alertSuccess(getLabel('LABEL_UPDATED_COLLECTION_SUCCESS')));
        dispatch(AjaxStatusActions.ajaxCallSuccess());
        dispatch(PageActions.prevPage());
      })
      .catch(error => {
        dispatch(AjaxStatusActions.ajaxCallError(error));
        dispatch(NotificationActions.alertDanger(getLabel('LABEL_FAILED_TO_UPDATE_COLLECTION')));
      });
  };
};
export const addCollection = (collection) => {
  return {
    type: types.ADD_COLLECTION,
    payload: collection
  };
};

export const setCollections = (collections) => {
  return {
    type: types.SET_COLLECTIONS,
    payload: collections
  };
};

export const createHeaders = (headers) => {
  return dispatch => {
    dispatch(HeaderActions.setHeaderControls(headers));
  };
};

export const goToNewCollection = () => {
  return dispatch => {
    dispatch(push(Pages.newCollection));
  };
};

export const onFailed = (stack) => {
  return dispatch => {
    dispatch(PageActions.onFailed(stack, FORM_NAME));
  };
};

export const openCollection = (collection) => {
  return dispatch => {
    dispatch(push(Pages.viewCollection + collection[Collection.ID]));
  };
};

export const confirmCancel = () => {
  return (dispatch, state) => {
    const { fluidForm: { collectionForm } } = state();
    if (collectionForm && collectionForm.touched) {
      dispatch(DialogActions.openCancelConfirmation(() => {
        dispatch(PageActions.prevPage());
      }));
    }
    else {
      dispatch(PageActions.prevPage());
    }
  };
};

export const confirmDelete = (id) => {
  return (dispatch, state) => {
    const { fluidForm: { collectionForm: { data } } } = state();
    dispatch(DialogActions.openDeleteConfirmation(() => {
      dispatch(AjaxStatusActions.beginAjaxCall());
      FluidApi.execute('deleteCollection', { id })
        .then(() => {
          dispatch(AjaxStatusActions.ajaxCallSuccess());
          dispatch(PageActions.prevPage());
          dispatch(NotificationActions.alertSuccess(getLabel('LABEL_DELETE_COLLECTION_SUCCESS')));
        })
        .catch((error) => {
          dispatch(AjaxStatusActions.ajaxCallError(error));
          dispatch(NotificationActions.alertDanger(getLabel('LABEL_DELETE_FAILED')));
        });
    }, undefined, data[Collection.NAME]));
  };
};

export const prevPage = () => {
  return dispatch => {
    dispatch(PageActions.prevPage());
  };
};
