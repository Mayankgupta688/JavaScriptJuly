var employeeOne = {
    name: "Mayank Gupta",
    company: "TechnoFunnel",
    age: 32,
    designation: "Trainer",
    salary: "10K"
}

var dynamicObject = {};

for (var keys in employeeOne) {
    if(keys == "name") {
        dynamicObject[keys] = "Anshul gupta";
    } else {
        dynamicObject[keys] = employeeOne[keys];
    }
}

