export default {
    getCollections: {
        development: () => new Promise((resolve) => {
            const collections = require('../../../utils/Mocks').default.collections;
            resolve({
                data: collections
            });
        })
    }
};