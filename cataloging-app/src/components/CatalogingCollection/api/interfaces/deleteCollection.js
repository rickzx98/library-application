import { Collection } from '../../../../types';
import { FluidApi } from 'fluid-commons';
export default {
  development: ({ id }) => new Promise((resolve) => {
    setTimeout(() => {
      FluidApi.storage('collections').then(({ data }) => {
        data().forEach((col, index) => {
          if (col[Collection.ID] === id()) {
            FluidApi.storage('collections', {
              remove: index
            }).then(({ result }) => {
              resolve({ data: result });
            });
          }
        });
      });
    }, 500);
  })
};
