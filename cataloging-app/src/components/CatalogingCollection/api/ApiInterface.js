import { Collection } from '../../../types';
export default {
  getCollectionById: {
    development: ({ id }) => new Promise((resolve) => {
      const collections = require('../../../utils/Mocks').collections;
      setTimeout(() => {
        const data = collections.filter(collection => collection[Collection.ID] === id())[0];
        resolve({
          data
        });
      }, 500);
    })
  },
  getCollections: {
    development: () => new Promise((resolve) => {
      const collections = require('../../../utils/Mocks').collections;
      setTimeout(() => {
        resolve({
          data: collections
        });
      }, 500);
    })
  },
  createCollection: {
    development: ({ input }) => new Promise((resolve, reject) => {
      const collections = require('../../../utils/Mocks').collections;
      setTimeout(() => {
        try {
          const newData = { ...input(), _id: collections.length + 1 };
          resolve({
            data: newData
          });
        } catch (error) {
          reject(error);
        }
      }, 500);
    })
  },
  updateCollection: {
    development: ({ input }) => new Promise((resolve, reject) => {
      const collections = require('../../../utils/Mocks').collections;
      setTimeout(() => {
        try {
          const collection = input();
          const id = collection[Collection.ID];
          const savedCollection = collections.filter(collection => collection[Collection.ID] === id)[0];
          const newData = { ...savedCollection, ...collection };
          resolve({
            data: newData
          });
        } catch (error) {
          reject(error);
        }
      }, 500);
    })
  }
};
