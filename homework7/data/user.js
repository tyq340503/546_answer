const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((dataCollection) => {
            return dataCollection.find({}).toArray();
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getRecipesById(id) {
        return recipes().then((dataCollection) => {
            return dataCollection.findOne({ _id: id }).then((data) => {
                if (!data) throw "User not found";

                return data;
            });
        });
    },
    addRecipes(firstName, lastName) {
        return recipes().then((dataCollection) => {
            let newUser = {
                firstName: firstName,
                lastName: lastName,
                _id: uuid.v4(),
                posts: []
            };

            return dataCollection.insertOne(newUser).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getUserById(newId);
            });
        });
    },
    removeRecipes(id) {
        return recipes().then((dataCollection) => {
            return dataCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete user with id of ${id}`)
                }
            });
        });
    },
    updateRecipes(id, updatedUser) {
        return this.getUserById(id).then((currentUser) => {
            let userUpdateInfo = {
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName
            };

            let updateCommand = {
                $set: userUpdateInfo
            };

            return recipes().then((dataCollection) => {
                return dataCollection.updateOne({ _id: id }, updateCommand).then(() => {
                    return this.getUserById(id);
                });
            });
        });
    },
    addPostToRecipes(userId, postId, postTitle) {
        return this.getUserById(id).then((currentUser) => {

            return dataCollection.updateOne({ _id: id }, {
                $addToSet: {
                    posts: {
                        id: postId,
                        title: postTitle
                    }
                }
            });
        });
    },
    removePostFromRecipes(userId, postId) {
        return this.getUserById(id).then((currentUser) => {
            return dataCollection.updateOne({ _id: id }, {
                $pull: {
                    posts: {
                        id: postId
                    }
                }
            });
        });
    }
}

module.exports = exportedMethods;