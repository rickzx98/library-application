import * as types from '../actions/';

export default (state = [], action) => {
    switch (action.type) {
        case types.ADD_COLLECTION:
            return [...state, action.payload];
        case types.SET_COLLECTIONS:
            return action.payload;
        default: return state;
    }
};