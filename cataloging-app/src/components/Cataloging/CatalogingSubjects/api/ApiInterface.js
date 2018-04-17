import { FluidApi, Subject} from '../imports';
import { PAGE_NAME } from '../constants';
export default {
  getSubjectById: {
    development: ({id}) => new Promise((resolve, reject) => {
      FluidApi.storage(PAGE_NAME)
        .then(({ data }) => {
          const result = data().filter(subject => subject[Subject.ID] === id())[0];
          if (result) {
            resolve({data: result});
          } else {
            reject(new Error('Subject not found.'));
          }
        })
        .catch(error => {
          reject(error);
        });
    })
  },
  getSubjects: {
    development: () => new Promise((resolve, reject) => {
      FluidApi.storage(PAGE_NAME)
        .then(({ data }) => {
          resolve({data: data().filter(subject => subject[Subject.ROOT] === true)});
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
          resolve({data: data().filter(subject => subject[Subject.PARENT] === parentId())});
        })
        .catch(error => {
          reject(error);
        });
    })
  }
};
