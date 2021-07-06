var age = "age";

var employeeOne = {
    name: "Mayank Gupta",
    company: "TechnoFunnel",
    age: 32,
    designation: "Trainer",
    salary: "10K"
}

employeeOne["age"] = "Meha Gupta"

for(var keys in employeeOne) {
    console.log(keys)
    console.log(employeeOne[keys])
}