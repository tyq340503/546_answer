const todoItems = require('./todo');
const connection = require("./mongoConnection");

const main = async () => {

    //const createdTask = await todoItems.createTask("My First Task", "This is the first thing I need to do today");
    //1. Create a task with the following details:
    const createdFirst = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log(createdFirst);

    //2. Log the task, and then create a new task with the following details:
    const createdSecond = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");

    //3. After the task is inserted, query all tasks and log them
    const getAllData = await todoItems.getAllTasks();
    console.log(getAllData);
    //console.log(getAllData.length);

    //const removeTask = await todoItems.removeTask(getAllData[0]._id);

    //4. After all the tasks are logged, remove the first task
    try {
        //return await todoItems.getTask("9714a17c-f228-49e9-a772-9086f5ff8bfb");
        return await todoItems.removeTask(getAllData[0]._id);
    } catch (error) {
        console.error(error);
    }

    //5. Query all the remaining tasks and log them
    const getRemainData = await todoItems.getAllTasks();

    try {
        for (key of getRemainData) {

            //6. Complete the remaining task
            let completeData = await todoItems.completeTask(key._id);

        }
    } catch (error) {
        console.error(error);
    }

    //const completeData = await todoItems.completeTask();
    //7. Log the task that has been completed with its new value.

    const getUpdateData = await todoItems.getAllTasks();

    for (key of getUpdateData) {

        console.log(key);
    }



    const db = await connection();

    await db.serverConfig.close();

    await db.serverConfig.close();

    console.log("Done!");
}

main().catch(error => {
    console.log(error);
});