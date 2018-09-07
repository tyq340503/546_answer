(function () {
    const calculatorMethods = {
        checkInput(input) {
            debugger;
            if (typeof input != 'string') {
                throw 'input data must be a string';
            }
            input = input.replace(/\W/g, "").toLocaleLowerCase();
            for (var i = 0, halfLen = input.length / 2; i < halfLen; i++) {
                if (lowRegStr[i] !== lowRegStr[input.length - 1 - i]) {
                    return false;
                }
            }
            return true;


            //return num1 + num2;
        }
    };

    function operationStringToFunction(input) {
        alert('123');
        if (!input) throw "No operation provided";

        const returnFunction = calculatorMethods.checkInput(input);

        if (returnFunction === undefined) throw "No such operation";

        return returnFunction;
    };
    const staticForm = document.getElementById("static-form");

    if (staticForm) {
        // We can store references to our elements; it's better to
        // store them once rather than re-query the DOM traversal each time
        // that the event runs.
        const firstNumberElement = document.getElementById("number1");
        //const secondNumberElement = document.getElementById("number2");
        // const operationElement = document.getElementById("operation");

        // const errorContainer = document.getElementById("error-container");
        // const errorTextElement = errorContainer.getElementsByClassName(
        //     "text-goes-here"
        // )[0];

        // const resultContainer = document.getElementById("result-container");
        // const resultTextElement = resultContainer.getElementsByClassName(
        //     "text-goes-here"
        // )[0];

        // We can take advantage of functional scoping; our event listener has access to its outer functional scope
        // This means that these variables are accessible in our callback
        staticForm.addEventListener("submit", event => {
            event.preventDefault();

            try {
                debugger;
                // hide containers by default
                //alert('123123');
                // errorContainer.classList.add("hidden");
                // resultContainer.classList.add("hidden");

                // Values come from inputs as strings, no matter what :(
                const firstNumberValue = firstNumberElement.value;
                //const secondNumberValue = secondNumberElement.value;
                //const operationValue = operationElement.value;

                const parsedFirstNumberValue = parseInt(firstNumberValue);
                //const parsedSecondNumberValue = parseInt(secondNumberValue);
                const operation = operationStringToFunction(operationValue);

                const result = operation(firstNumberValue);

                resultTextElement.textContent = "The result is " + result;
                resultContainer.classList.remove("hidden");
            } catch (e) {
                const message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();