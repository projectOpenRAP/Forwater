let {
    init,
    createIndex,
    deleteIndex,
    getAllIndices
} = require('../../../searchsdk/index.js');

let initializeSbDB = () => {
    return init()
        .then(res => {
            return getAllIndices();
        })
        .then(res => {
            let availableIndices = JSON.parse(res.body).indexes;

            if (availableIndices.indexOf('fw.db') === -1) {
                return { message : 'Creating forwater index now.' };
            } else {
                return deleteIndex({ indexName : 'fw.db' });
            }
        })
        .then(res => {
            res.message && console.log(res.message);
            return createIndex({ indexName : 'fw.db'});
        });
}

module.exports = {
    initializeSbDB
}