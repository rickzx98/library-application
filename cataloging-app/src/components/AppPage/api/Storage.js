export default {
  development: () => {
    const { collections, libraries, librarian } = require('../../../utils/Mocks');
    return {
      collections, libraries,
      app: {},
      pageListData: {
        librarian
      }
    };
  }
};
