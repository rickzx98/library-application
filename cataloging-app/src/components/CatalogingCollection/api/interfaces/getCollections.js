import { FluidApi } from 'fluid-commons';
export default {
  development: () => new Promise((resolve) => {
    setTimeout(() => {
      FluidApi.storage('collections')
        .then(({ data }) => resolve({
          data: data()
        }));
    }, 500);
  })
};
