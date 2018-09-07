function deepEquality(obj1, obj2){
    if(typeof obj1=="object" && typeof obj2=="object"){
        let arr1 = Object.keys(obj1).sort();
        let arr2 = Object.keys(obj2).sort();
        //let equal = true;
        
        if(arr1.length!=arr2.length){
            return false;
        }
        for (var i = 0; i < arr1.length; i++) {
            let propName = arr1[i];
            if (obj1[propName] !== obj2[propName]) {
                return false;
            }
        }
        return true;
    }else{
        throw "must have two object arguments";
    }
}


function uniqueElements(arr){
    if(Array.isArray(arr)){
        let arr1=[];
        for (let i = 0; i < arr.length; i++) {
            if(arr1.indexOf(arr[i])==-1){
                arr1.push(arr[i]);
            }
        }

        return arr1.length;
    }else{
        throw "must have an argument and the type of the argument must be array";
    }
}

function countOfEachCharacterInString(str){
    if(typeof str=="string"){
        let arr = str.split("");
        let obj ={};
        for (let i = 0; i < arr.length; i++) {
            //const element = arr[i];
            if(obj[arr[i]]){
                obj[arr[i]]+=1;
            }else{
                obj[arr[i]]=1;
            }
        }
        return obj;
    }else{
        throw "the type of the argument must be string";
    }
}

module.exports={
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
}