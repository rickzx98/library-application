import initialState from './InitialState';
import * as types from '../../actions/types';
export default (state = initialState, action)=> {
  switch (action.type) {
    case types.SET_LIST_DATA:
    {
      const newState = {...initialState};
      newState[action.pageName] = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
