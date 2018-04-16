import * as types from './types';

import { FluidApi, HeaderActions, Subject } from '../imports';

export const loadSubjects = () => dispatch => {
  FluidApi.execute('getSubjects')
    .then(({ getSubjects }) => {
      dispatch(setSubjectRoots(getSubjects('data')()));
    })
    .catch(error => { console.error(error); });
};
export const loadSubjectsChildren = (node, toggled) => dispatch => {
  FluidApi.execute('getChildrenSubjects', { parentId: node[Subject.ID] })
    .then(({ getChildrenSubjects }) => {
      dispatch(clearActive());
      dispatch(setSubjectsChildren({ ...node }, getChildrenSubjects('data')(), toggled));
    })
    .catch(error => { console.error(error); });
};
export const setSubjectsChildren = (node, subjects, toggled) => ({
  type: types.SET_LOADED_SUBJECTS_CHILDREN,
  payload: {
    paths: node.source || [node[Subject.ID]],
    subjects,
    toggled
  }
});

export const setSubjectRoots = (subjects) => ({
  type: types.SET_LOADED_SUBJECTS_ROOT,
  payload: subjects
});

export const clearActive = () => ({
  type: types.CLEAR_ACTIVE
});

export const createHeaders = (headers) => dispatch => {
  dispatch(HeaderActions.setHeaderControls(headers));
};