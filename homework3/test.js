const text =  require('./textMetrics');
const file = require('./fileData');

const data = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"

// console.log(text.createMetrics(data))
// console.log(text.simplify(data));

const saveStringFile = async (path, text) => {
    try {

        let data = await file.saveStringToFile('./text.txt', 'sdasdacasccasca21e21s12')
    } catch (error) {
        console.error(error);
    }
}

const getJsonFile = async (path) => {
    try {
        let data = await file.getFileAsJSON(path);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getJsonFile('./text.txt')
    .catch(err => {
        console.log(err);
    });