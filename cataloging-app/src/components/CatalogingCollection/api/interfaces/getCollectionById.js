import { Collection } from '../../../../types';
export default {
  development: ({ id }) => new Promise((resolve) => {
    let collections = require('../../../../utils/Mocks').collections;
    setTimeout(() => {
      const data = collections.filter(collection => collection[Collection.ID] === id())[0];
      resolve({
        data
      });
    }, 500);
  })
};
