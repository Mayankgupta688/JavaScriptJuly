function Employee(userName, userAge, userDesignation, userSalary) {
    var name = userName;
    var age = userAge;
    var designation = userDesignation;
    var salary = userSalary;
    return {
        name: name,
        age: age,
        designation: designation,
        salary: salary
    }
}

debugger

var empOne = Employee("Mayank", 30, "Developer", 100);

var empTwo = Employee("Anshul", 20, "Developer", 10);

