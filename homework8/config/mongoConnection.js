const MongoClient = require('mongodb').MongoClient;

// const setting = {
//     monogoConfig: {
//         serverUrl: "mongodb://localhost:27017",
//         database: "lab7-recipes"
//     }
// }
const mongoConfig = {
    serverUrl: "mongodb://localhost:27017",
    database: "lab7-recipes"
}

//let fullUrl = setting.monogoConfig.serverUrl + setting.monogoConfig.database;
let _connection = undefined;
let _db = undefined;

module.exports = async () => {
    // const mongoConfig = {
    //     serverUrl: "mongodb://localhost:27017",
    //     database: "lab7-recipes"
    // }

    if (!_connection) {
        // _connection = MongoClient.connect(fullUrl)
        // .then((db) => { return db; })
        // .catch((error)=>{
        //     console.log(error);
        // })
        _connection = await MongoClient.connect(mongoConfig.serverUrl);
        _db = await _connection.db(mongoConfig.database);

    }
    return _db;
};

// var url = "mongodb://localhost:27017/firstTest";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   //console.log("数据库已创建!");
//   console.log(db);
//   db.close();
// });