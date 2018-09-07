const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const uuid = require('node-uuid');

let exportedMethods = {
    getQueryData() {
        return users().then((userCollection) => {
            return userCollection.find({}).toArray();
        });
    },
    getQueryStory() {
        return users().then((userCollection) => {
            return userCollection.find({}).toArray();
        });
    },
    getQueryEducation() {
        return users().then((userCollection) => {
            return userCollection.find({}).toArray();
        });
    },
}

module.exports = exportedMethods;