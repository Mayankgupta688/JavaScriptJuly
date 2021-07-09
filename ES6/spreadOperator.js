var arrayData = [10, 20, 30]

function sampleFunction(a, b, c) {
    debugger;
    console.log(a);
    console.log(b);
    console.log(c);
}

sampleFunction(arrayData[0], arrayData[1], arrayData[2]);


var user = {
    name: "X",
    age: 20,
    designation: "developer"
}

var { name, age, designation } = {...user}; 

console.log(name)