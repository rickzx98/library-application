import * as types from '../actions/types';

import InitialState from './InitialState';
import { Subject } from '../imports';

const recursiveLookUp = (subjects, rootPath, children, toggled) => {
  const idPath = rootPath.shift();
  let index;
  let thisSubject;
  subjects.forEach((subject, key) => {
    if (subject[Subject.ID] === idPath) {
      thisSubject = { ...subject, children: subject.children ? [...subject.children] : [] };
      index = key;
    }
  });
  if (thisSubject && rootPath.length > 0) {
    subjects[index] = thisSubject;
    return recursiveLookUp(thisSubject.children, rootPath, children, toggled);
  }
  else {
    const newParent = { ...thisSubject, toggled };
    if (newParent && newParent.children && newParent.children.length === 0) {
      const newSubjects = [...children];
      newSubjects.forEach((sub, index) => {
        const newSub = { ...sub };
        newSub.source = newParent.source ? [...newParent.source] : [];
        newSub.source.push(newParent[Subject.ID]);
        newSub.source.push(sub[Subject.ID]);
        newSubjects[index] = newSub;
      });
      newParent.children = newSubjects;
    }
    subjects[index] = newParent;
  }
};
export default (state = InitialState, action) => {
  switch (action.type) {
    case types.SET_LOADED_SUBJECTS_CHILDREN: {
      const { paths, subjects, toggled } = action.payload;
      const newState = [...state];
      recursiveLookUp(newState, [...paths], subjects, toggled);
      return newState;
    }
    case types.SET_LOADED_SUBJECTS_ROOT: {
      return action.payload || [];
    }
    default:
      return state;
  }
};
