const dbConnection = require('./mongoConnection');

const getDataFn = (collection) => {
    let _col = undefined;

    return async () => {
        if (!_col) {
            const db = await dbConnection();

            _col = await db.collection(collection);

        }
        return _col;
    }
}

module.exports = {
    posts: getDataFn("posts"),
    users: getDataFn("users")
    // data: getDataFn("recipes")
};