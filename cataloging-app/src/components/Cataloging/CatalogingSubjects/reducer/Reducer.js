import * as types from '../actions/types';

import InitialState from './InitialState';
import { Subject } from '../imports';
import { clearActives } from './ClearActives';
import { recursiveLookUp } from './RecursiveLookup';

export default (state = InitialState, action) => {
  switch (action.type) {
    case types.CLEAR_CONTENT:
    {
      return {...state, content: {}};
    }
    case types.CLEAR_ACTIVE:
    {
      const newState = {...state, data: [...state.data]};
      clearActives(newState, state.content.selected);
      return newState;
    }
    case types.SET_LOADED_SUBJECTS_CHILDREN:
    {
      const { paths, subjects, toggled } = action.payload;
      const data = [...state.data];
      const selected = recursiveLookUp(data, [...paths], subjects, toggled);
      return {...state, data, content: {selected: selected.source || [selected[Subject.ID]]}};
    }
    case types.SET_LOADED_SUBJECTS_ROOT:
    {
      return {...state, data: action.payload};
    }
    default:
      return state;
  }
};
