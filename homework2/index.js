//console.log(1);
const geometry = require('./geometry');
const util = require('./utilities');

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const testArr = ["a", "a", "b", "a", "b", "c"];
const test = "Hello, the pie is in the oven";

console.log(util.deepEquality(first, second)); // false
console.log(util.deepEquality(first, third)); 
console.log(util.uniqueElements(testArr));
const charMap = util.countOfEachCharacterInString(test); 
console.log(charMap);

console.log(geometry.surfaceAreaOfRectangularPrism(2,3,3))
console.log(geometry.surfaceAreaOfSphere(2))
console.log(geometry.volumeOfRectangularPrism(4,2,3))
console.log(geometry.volumeOfSphere(2))