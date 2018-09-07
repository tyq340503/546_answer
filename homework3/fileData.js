const fs = require('fs');
const currentPath = require('path');

async function getFileAsString(path) {
    return new Promise((resolve, reject) => {
        if (path) {

            fs.readFile(currentPath.join(__dirname, path), (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                try {
                    //let stringData = data.toString();
                    resolve(data.toString());
                } catch (error) {
                    reject(error);
                }
            })
        } else {
            throw 'path is not correct or exists';
            reject('path is not exist or correct');
        }
    })
}

async function getFileAsJSON(path) {
    return new Promise((resolve, reject) => {
        if (path) {
            fs.readFile(currentPath.join(__dirname, path), (err, data) => {
                if (err) {
                    reject(err)
                }
                try {
                    resolve(JSON.parse(data.toString()));
                } catch (error) {
                    throw 'typeof data is not right';
                    reject(error);
                }
            })
        } else {
            throw 'path is not correct or exists';
            reject('path is not correct or exists');
        }
    })
}

async function saveStringToFile(path, text) {
    return new Promise((resolve, rejcet) => {
        if (path && typeof text == "string") {
            fs.writeFile(currentPath.join(__dirname, path), text, (err, data) => {
                if (err) {
                    rejcet(err);
                    return;
                }

                try {
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            })
        } else {
            throw 'must provide two exist arguments';
            reject('path or text is not correct or exists');
        }
    })
}

async function saveJSONToFile(path, obj) {
    return new Promise((resolve, reject) => {
        if (path && typeof obj == "object") {
            fs.writeFile(currentPath.join(__dirname, path), obj, (err, data) => {
                if (err) {
                    reject(err);
                }
                try {
                    resolve(JSON.stringify(data));
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            throw "type of the arguments might be wrong";
            reject('path or text is not correct or exists');
        }
    })
}

module.exports = {
    getFileAsJSON,
    saveJSONToFile,
    saveStringToFile,
    getFileAsString
}