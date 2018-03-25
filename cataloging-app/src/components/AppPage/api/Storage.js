export default {
  development: () => {
    const { collections, libraries } = require('../../../utils/Mocks');
    return {
      collections, libraries,
      app: {}
    };
  }
};
