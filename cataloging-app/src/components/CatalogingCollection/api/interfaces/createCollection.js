export default {
  development: ({ input }) => new Promise((resolve, reject) => {
    let collections = require('../../../../utils/Mocks').collections;
    setTimeout(() => {
      try {
        const newData = { ...input(), _id: collections.length + 1 };
        collections.push(newData);
        resolve({
          data: newData
        });
      } catch (error) {
        reject(error);
      }
    }, 500);
  })
};
