import { FluidApi } from '../imports';
import { PAGE_NAME } from '../constants';
export default {
  getSubjects: {
    development: () => new Promise((resolve, reject) => {
      FluidApi.storage(PAGE_NAME)
        .then(({ data }) => {
          resolve({ data: data().filter(subject => subject.root === true) });
        })
        .catch(error => {
          reject(error);
        });
    })
  },
  getChildrenSubjects: {
    development: ({ parentId }) => new Promise((resolve, reject) => {
      FluidApi.storage(PAGE_NAME)
        .then(({ data }) => {
          resolve({ data: data().filter(subject => subject.parent === parentId()) });
        })
        .catch(error => {
          reject(error);
        });
    })
  }
};
