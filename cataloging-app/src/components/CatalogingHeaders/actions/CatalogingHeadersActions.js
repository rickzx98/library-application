import { Pages } from '../../../types';
import { push } from 'react-router-redux';

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