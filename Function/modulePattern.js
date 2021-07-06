function Employee(userName, userAge, userDesignation, userSalary) {
    var name = userName;
    var age = userAge;
    var designation = userDesignation;
    var salary = userSalary;


    function incrementSalary() {
        salary += 10;
        return salary;
    }

    function getDetails() {
        console.log(name);
        console.log(age);
        console.log(designation);
    }

    return {
        getDetails: getDetails,
        incrementSalary: incrementSalary
    }
}

debugger

var empOne = Employee("Mayank", 30, "Developer", 100);

console.log(empOne.getDetails())

var empSalary = empOne.incrementSalary()

debugger;

