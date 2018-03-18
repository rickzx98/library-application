import { Collection } from '../../../../types';
export default {
  development: ({ id, input }) => new Promise((resolve, reject) => {
    let collections = require('../../../../utils/Mocks').collections;
    setTimeout(() => {
      try {
        const inputCollection = input(); let newData = {};
        collections.forEach((collection, index) => {
          if (collection[Collection.ID] === id()) {
            newData = { ...collection, ...inputCollection };
            collections[index] = newData;
          }
        });
        resolve({
          data: newData
        });
      } catch (error) {
        reject(error);
      }
    }, 500);
  })
};
