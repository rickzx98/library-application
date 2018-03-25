import { FluidApi } from 'fluid-commons';
import { Library } from '../../../../types';
export default {
  development: ({ id }) => new Promise((resolve) => {
    setTimeout(() => {
      FluidApi.storage('libraries').then(({ data }) => {
        data().forEach((library, index) => {
          if (library[Library.ID] === id()) {
            FluidApi.storage('libraries', {
              remove: index
            }).then(() => {
              resolve();
            });
          }
        });
      });
    }, 500);
  })
};
