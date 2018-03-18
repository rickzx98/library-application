export default {
  development: () => new Promise((resolve) => {
    let collections = require('../../../../utils/Mocks').collections;
    setTimeout(() => {
      resolve({
        data: collections
      });
    }, 500);
  })
};
