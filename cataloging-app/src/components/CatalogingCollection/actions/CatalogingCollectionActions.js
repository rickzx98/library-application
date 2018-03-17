import * as types from './';

import { AjaxStatusActions } from '../../AjaxStatus/';
import { FluidApi } from 'fluid-commons';

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