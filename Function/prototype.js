function Employee(userName, userAge, userDesignation, userSalary) {
    var name = userName;
    var age = userAge;
    var designation = userDesignation;
    var salary = userSalary;

    function getDetails() {
        console.log(name + " " + age)
    }
    return {
        name: name,
        age: age,
        designation: designation,
        salary: salary,
        getDetails: getDetails
    }
}

// 1000 * 6 = 6000


var empOne = Employee("Mayank", 30, "Developer", 100);
empOne.getDetails()

var empTwo = Employee("Anshul", 20, "Developer", 10);
empTwo.getDetails()

