var userNameForApplication = "Anshul";

function returnFunctionData() {

    var userNameForApplication = "Mayank"

    function add(a, b) {
        console.log(a + b);
    }

    function substract(a, b) {
        console.log(a - b);
    }

    function multiply(a, b) {
        console.log(a * b);
    }

    console.log(userNameForApplication);

    return {
        add: add,
        substractFunction: substract,
        multiply,
        userNameForApplication
    }

}

debugger;
var calculator = returnFunctionData();

console.log(calculator.userNameForApplication)

calculator.add(10, 20);

debugger;