import { Collection } from '../../../../types';
import { FluidApi } from 'fluid-commons';
export default {
  development: ({ id }) => new Promise((resolve) => {
    setTimeout(() => {
      FluidApi.storage('collections')
        .then(({ data }) => {
          const result = data().filter(collection => collection[Collection.ID] === id())[0];
          resolve({
            data: result
          });
        });
    }, 500);
  })
};
