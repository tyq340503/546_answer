function volumeOfRectangularPrism(l, w, h) {
    if(arguments.length==3){

        if (l < 0 || w < 0 || h < 0) {
            throw "arguments must larger than 0";
        }
        if (!l || !w || !h) {
            throw "you must have three arguments";
        }
        if (typeof l != "number" || typeof w != "number" || typeof h != "number") {
            throw "type of the arguments must be number";
        }
    
        return l * w * h;
    }else{
        throw "you should input three arguments";
    }
}

function surfaceAreaOfRectangularPrism(l, w, h) {
    if(arguments.length==3){

        if (l < 0 || w < 0 || h < 0) {
            throw "arguments must larger than 0";
        }
        if (!l || !w || !h) {
            throw "you must have three arguments";
        }
        if (typeof l != "number" || typeof w != "number" || typeof h != "number") {
            throw "type of the arguments must be number";
        }
        return 2 * l * w + 2 * w * h + 2 * l * h;
    }else{
        throw "you should input three arguments"
    }
}

function volumeOfSphere(r) {
    if(arguments.length==1){

        if (r < 0) {
            throw "radius must larger than 0";
        }
        if (!r) {
            throw "you must have one argument";
        }
        if (typeof r != "number") {
            throw "type of the argument must be number";
        }
        return 4 * Math.PI * Math.pow(r, 3) / 3;
    }else{
        throw "number of the argument must be one";
    }
}

function surfaceAreaOfSphere(r) {
    if(arguments.length==1){

        if (r < 0) {
            throw "radius must larger than 0";
        }
        if (!r) {
            throw "you must have one argument";
        }
        if (typeof r != "number") {
            throw "type of the argument must be number";
        }
        return Math.PI * 4 * Math.pow(r, 2);
    }else{
        throw "number of the argument must be one";
    }
}

module.exports = {
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
}
