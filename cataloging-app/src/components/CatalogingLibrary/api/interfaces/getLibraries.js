export default {
    development: () => new Promise((resolve) => {
        const libraries = require('../../../../utils/Mocks.js').libraries;
        setTimeout(() => {
            resolve({
                data: libraries
            });
        }, 400);
    })
};