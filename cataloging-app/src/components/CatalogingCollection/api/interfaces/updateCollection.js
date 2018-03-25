import { Collection } from '../../../../types';
import { FluidApi } from 'fluid-commons';
export default {
  development: ({ id, input }) => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const inputCollection = input();
        FluidApi.storage('collections')
          .then(({ data }) => {
            let newData = {};
            data().forEach((collection, index) => {
              if (collection[Collection.ID] === id()) {
                FluidApi.storage('collections', {
                  field: index,
                  value: { ...collection, ...inputCollection }
                }).then(() => {
                  resolve({
                    data: newData
                  });
                });
              }
            });
          });
      } catch (error) {
        reject(error);
      }
    }, 500);
  })
};
