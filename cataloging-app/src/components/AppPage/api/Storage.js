export default {
  development: () => {
    const { collections, libraries, librarian } = require('../../../utils/Mocks');
    return {
      collection: collections,
      library: libraries,
      app: {},
      title: [],
      librarian
    };
  }
};
