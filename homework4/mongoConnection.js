const MongoClient = require('mongodb').MongoClient;

const setting = {
    monogoConfig: {
        serverUrl: "mongodb://localhost:27017",
        database: "Tang_Yuqi_lab4"
    }
}

let fullUrl = setting.monogoConfig.serverUrl;
let _connection = undefined;
let _db = undefined; 

module.exports = async () => {
    if (!_connection) {
        _connection = await MongoClient.connect(fullUrl);
        _db = await _connection.db(setting.monogoConfig.database)
        // .then((db) => {
        //     return db;
        // })
        //console.log(_connection);
        //console.log(_db);
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