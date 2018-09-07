function simplify(text) {
    if (typeof text != 'string') {
        throw 'input is not right';
        return;
    }
    let result = '';
    let arr = [];
    text = text.toLowerCase();
    arr = text.replace(/[\'\"\\\/\b\f\n\r\t\d+\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, " ").split(' ').filter(i => i);
    arr.forEach(i => {
        result += i + ' ';
    })
    if (result.endsWith(' ')) {
        result = result.substring(text.length - 1, 0);
    }
    return result
}


//
totalLetters = async (text, result) => {
    let str = "";
    if (typeof text == 'string') {
        //str = text.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
        //str = text.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, " ");

        //text = text.toLowerCase();
        for (let i = 0; i < text.length; i++) {
            if (text[i].toLowerCase().charCodeAt() <= 122 && text[i].toLowerCase().charCodeAt() >= 97) {
                //result['totalLetters'] += 1;
                str += text[i];
            }

        }
        return result['totalLetters'] = str.length;
    } else {
        throw 'type string';
    }
};

totalWords = async (text, result) => {
    if (typeof text == 'string') {
        let str = "";
        str = text.replace(/[\'\"\\\/\b\f\n\r\t\d+\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, " ")
        arr = str.split(' ').filter(i => i);

        return result['totalWords'] = arr.length;
    } else {
        throw 'type string';
    }

};

uniqueWords = async (text, result) => {

    let resultArr = [];
    arr.forEach(i => {
        if (resultArr.indexOf(i.toLowerCase()) < 0) {
            resultArr.push(i.toLowerCase());
        }
    })
    return result['uniqueWords'] = resultArr.length;
};

longWords = async (text, result) => {

    return result['longWords'] = arr.filter(i => i.length >= 6).length;
};

averageWordLength = async (text, result) => {
    let a = 0;

    arr.forEach(i => a += i.length);

    return result['averageWordLength'] = a / arr.length;
};

wordOccurrences = async (text, result) => {
    let wordOccurrences = {};

    arr.forEach(i => wordOccurrences[i.toLowerCase()] == null ? wordOccurrences[i.toLowerCase()] = 1 : wordOccurrences[i.toLowerCase()] += 1);

    return result['wordOccurrences'] = wordOccurrences;
};


function createMetrics(text) {
    let result = {};
    text = text.toLowerCase();
    let arr = [];
    try {
         totalLetters(text, result);
         totalWords(text, result);
         uniqueWords(text, result);
         longWords(text, result);
         averageWordLength(text, result);
         wordOccurrences(text, result);
    } catch (error) {
        console.error(error)
    }

    return result;
}

module.exports = {
    simplify,
    createMetrics
}