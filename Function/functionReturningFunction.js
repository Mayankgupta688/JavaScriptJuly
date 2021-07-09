debugger;

function Employee(userName, userAge, userDesignation, userSalary) {
    this.name = userName;
    this.age = userAge;
    this.designation = userDesignation;
    this.salary = userSalary;
}



Employee.prototype.getDetails = () => {
    console.log(this.name)
}


var empOne = new Employee("Mayank", 30, "Developer", 100);
empOne.getDetails()

var empTwo = Employee("Anshul", 20, "Developer", 10);
empTwo.getDetails()

debugger