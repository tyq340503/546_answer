
const file = require('./fileData');
const textModify = require('./textMetrics');
const path = require('path');

//console.log(path.join(__dirname, './chapter1.txt'));


// file.getFileAsString('./chapter1.txt')
//     .then((resolve) => {
//         //console.log(JSON.stringify(resolve))
//         console.log(resolve.toString());
//     }).catch((error) => {
//         console.error(error)
//     });

// file.saveStringToFile('./text.txt', 'sdasdacasccasca21e21s12')
//     .then((resolve) => {
//         console.log(resolve);
//     }).catch((error) => {
//         console.error(error);
//     });


// file.saveJSONToFile(path.join(__dirname, 'text.txt'), data)
//     .then((resolve) => {
//         console.log(resolve)
//     }).catch((error) => {
//         console.error(error)
//     })


const getStringFile = async (path) => {
    try {
        let data = await file.getFileAsString(path);
        console.log(data);
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


const saveStringFile = async (path, text) => {
    try {

        let data = await file.saveStringToFile(path, text)
    } catch (error) {
        console.error(error);
    }
}

const saveJsonFile = async (path, data) => {
    try {
        let content = await file.saveJSONToFile(path, data);
    } catch (error) {
        console.error(error);
    }
}


let data = [{
    "name": "sdadsadasdas",
    "title": "adsdasdassdasdadqw",
    "description": "sdasdadqdwdxzxczx",
    "url": "sdadsnbczxzxc"
}]


getStringFile('./test1.txt')
    .catch(err => {
        console.log(err);
    });

getJsonFile('./text2.txt')
    .catch(err => {
        console.log(err);
    });


saveStringFile('./text3.txt', 'sdasdacassadasdaccasca21e21s12')
    .catch(err => {
        console.log(err);
    });

saveJsonFile('./text4.txt', data)
    .catch(err => {
        console.log(err);
    });

let text = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";

console.log(textModify.simplify(text));

console.log(textModify.createMetrics(text));