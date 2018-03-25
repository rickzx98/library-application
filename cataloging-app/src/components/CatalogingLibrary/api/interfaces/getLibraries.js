import { FluidApi } from 'fluid-commons';
export default {
  development: () => new Promise((resolve) => {
    setTimeout(() => {
      FluidApi.storage('libraries').then(({ data }) => {
        resolve({
          data: data()
        });
      });
    }, 400);
  })
};
