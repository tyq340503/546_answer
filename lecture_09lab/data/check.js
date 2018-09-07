let currId = 0;
let todoListEntries = {};

let exportedMethods = {
  add(num1, num2) {
    if (typeof num1 !== "number") throw "Must provide a number";
    if (isNaN(num1)) throw "Must provide a number";
    if (typeof num2 !== "number") throw "Must provide a number";
    if (isNaN(num2)) throw "Must provide a number";

    return num1 + num2;
  },
  subtract(num1, num2) {
    if (typeof num1 !== "number") throw "Must provide a number";
    if (isNaN(num1)) throw "Must provide a number";
    if (typeof num2 !== "number") throw "Must provide a number";
    if (isNaN(num2)) throw "Must provide a number";

    return num1 - num2;
  },
  multiply(num1, num2) {
    if (typeof num1 !== "number") throw "Must provide a number";
    if (isNaN(num1)) throw "Must provide a number";
    if (typeof num2 !== "number") throw "Must provide a number";
    if (isNaN(num2)) throw "Must provide a number";

    return num1 * num2;
  },
  divide(num1, num2) {
    if (typeof num1 !== "number") throw "Must provide a number";
    if (isNaN(num1)) throw "Must provide a number";
    if (typeof num2 !== "number") throw "Must provide a number";
    if (isNaN(num2)) throw "Must provide a number";
    if (num2 <= 0) throw "Cannot divide by 0!";

    return num1 / num2;
  },
  checkInput(num1) {
    if (typeof num1 != 'string') {
      throw 'input data must be a string';
    }
    num1 = num1.replace(/\W/g, "").toLocaleLowerCase();
    for (var i = 0, halfLen = num1.length / 2; i < halfLen; i++) {
      if (num1[i] !== num1[num1.length - 1 - i]) {
        return false;
      }
    }
    return true;
  },
  makeToDo(title,check) {
    if (!title) throw "Must provide a title";
    let notDone = false;
    if(title.replace(/\W/g, "") == ""){
      notDone = true;
    }
    let newTask = {
      id: ++currId,
      title: title,
      done: false,
      notDone: notDone,
      istrue: check //this.checkInput(title)
    };
  
    todoListEntries[newTask.id] = newTask;
    return newTask;
  }
};

module.exports = exportedMethods;
