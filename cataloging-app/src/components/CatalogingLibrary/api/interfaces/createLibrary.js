import { FluidApi } from 'fluid-commons';
import { Library } from '../../../../types/';
import { generateUID } from '../../../../utils/';
export default {
  development: ({ input }) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const newData = { ...input() };
      newData[Library.ID] = generateUID();
      FluidApi.storage('libraries', {
        value: newData
      }).then(() => {
        resolve({
          data: newData
        });
      }).catch(error => { reject(error); });
    }, 500);
  })
};
