import { Collection } from '../../../../types/';
import { FluidApi } from 'fluid-commons';
import { generateUID } from '../../../../utils/';
export default {
  development: ({ input }) => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const newData = { ...input() };
        newData[Collection.ID] = generateUID();
        FluidApi.storage('collections', {
          value: newData
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
