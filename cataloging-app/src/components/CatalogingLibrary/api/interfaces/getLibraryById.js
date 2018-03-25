import { FluidApi } from 'fluid-commons';
import { Library } from '../../../../types/';
export default {
  development: ({ id }) => new Promise((resolve) => {
    setTimeout(() => {
      FluidApi.storage('libraries').then(({ data }) => {
        const result = data().filter(library => library[Library.ID] === id())[0];
        resolve({
          data: result
        });
      });
    }, 400);
  })
};
