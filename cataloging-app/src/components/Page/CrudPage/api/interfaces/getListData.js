import { FluidApi } from 'fluid-commons';
export default {
  development: ({pageName}) => new Promise((resolve, reject) => {
    FluidApi.storage('pageListData', {
      field: pageName()
    }).then(({data})=> {
      const result = {};
      result[pageName()] = data();
      resolve({
        data: result
      });
    }).catch(error=> {
      reject(error);
    });
  })
};
