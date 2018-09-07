const mongoCollections = require("./mongoCollections");

const data = mongoCollections.data;

createTask = async (title, description) => {
    if (!title && !description) throw "You must provide a title and a description for your data";
    const dataCollection = await data();
    let newData = {
        title: title,
        description: description,
        completed: false,
        completedAt: null
    };

    const insertInfo = await dataCollection.insertOne(newData);
    if (insertInfo.insertedCount === 0) throw "Could not add data";
    const newId = insertInfo.insertedId;
    const dataI = await getTask(newId);
    return dataI;
}

getAllTasks = async () => {
    const dataCollection = await data();
    const dataAll = await dataCollection.find({}).toArray();
    return dataAll;
}

getTask = async (id) => {
    if (!id) throw 'You must provide an id to search for';

    const dataCollection = await data();
    const dataOne = await dataCollection.findOne({ _id: id });
    if (dataOne === null) throw "No data with that id";

    return dataOne;
}

completeTask = async (taskId) => {
    if (!taskId) throw "You must provide an id to search for";
    const dataCollection = await data();
    const updatedData = {
        "completed": true,
        "completedAt": new Date().toDateString()
    };
    const updateInfo = await dataCollection.updateOne(
        { "_id": taskId },
        { $set: { "completed": true, "completedAt": new Date().toDateString() } },
        { upsert: true }
    );
    if (updateInfo.modifiedCount == 0) {
        throw "could not update data successfully";
    }
}

removeTask = async (id) => {
    if (!id) throw "You must provide an id to search for";
    const dataCollection = await data();
    const deletionInfo = await dataCollection.removeOne({ _id: id });
    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete data with id of ${id}`;
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}