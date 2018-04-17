import * as types from './types';
import { PAGE_NAME } from '../constants';
import { FluidApi, HeaderActions, Subject, PageActions } from '../imports';

export const loadSubjects = () => dispatch => {
  FluidApi.execute('getSubjects')
    .then(({ getSubjects }) => {
      dispatch(setSubjectRoots(getSubjects('data')()));
    })
    .catch(error => {
      console.error(error);
    });
};
export const loadSubjectById = (id) => dispatch => {
  dispatch(PageActions.loadById(PAGE_NAME, id));
};
export const loadSubjectsChildren = (node, toggled) => dispatch => {
  FluidApi.execute('getChildrenSubjects', {parentId: node[Subject.ID]})
    .then(({ getChildrenSubjects }) => {
      dispatch(clearActive());
      dispatch(setSubjectsChildren({...node}, getChildrenSubjects('data')(), toggled));
    })
    .catch(error => {
      console.error(error);
    });
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

export const goToCreate = ()=> (dispatch, state) => {
  const {subjects: {content}} = state();
  if (content.selected && content.selected.length > 0) {
    dispatch(PageActions.goToUrl(`/${PAGE_NAME}/new/${content.selected[content.selected.length - 1]}`));
  } else {
    dispatch(PageActions.add(PAGE_NAME));
  }
};

export const back = () => dispatch => {
  dispatch(PageActions.back());
};

export const prevPage = () => dispatch => {
  dispatch(PageActions.prevPage(PAGE_NAME));
};

export const clearContent = () => ({
  type: types.CLEAR_CONTENT
});


export const create = (value) => dispatch => {
  dispatch(PageActions.create(PAGE_NAME, value.getRaw()));
};

export const update = (id, value) => dispatch => {
  dispatch(PageActions.update(PAGE_NAME, id, value.getRaw()));
};

export const editSubject = () => (dispatch, state) => {
  const {subjects: {content:{ selected }}} = state();
  if (selected && selected.length > 0) {
    const id = selected[selected.length - 1];
    dispatch(PageActions.goToUrl(`/${PAGE_NAME}/view/${Subject.ID}_f${id}`));
  }
};

export const removeSubject = () => (dispatch, state) => {
  const {subjects: {content:{ selected }}} = state();
  if (selected && selected.length > 0) {
    const id = selected[selected.length - 1];
    dispatch(PageActions.deleteData(PAGE_NAME, `${Subject.ID}_f${id}`));
  }
};


export const goToUrl = (url) => dispatch => {
  dispatch(PageActions.goToUrl(url));
};
