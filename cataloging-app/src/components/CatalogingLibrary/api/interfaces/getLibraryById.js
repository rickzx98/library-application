import { Library } from '../../../../types/';
export default {
  development: ({ id }) => new Promise((resolve) => {
    const libraries = require('../../../../utils/Mocks.js').libraries;
    setTimeout(() => {
      const data = libraries.filter(library => library[Library.ID] === id())[0];
      resolve({
        data: data
      });
    }, 400);
  })
};
