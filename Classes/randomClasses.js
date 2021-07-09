class Employees {
    bonus = 0
    lastCompanySalary = 0;

    static count = 0;

    constructor(name, age, designation, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }


    getDetails = () => {
        console.log(`${this.name}`)
    }

    getBonus = () => {
        console.log(`${this.salary / 10}`)
    }
}

class Manager extends Employee {
    teamSize = 0;

    constructor(name, age, designation, salary, teamSize) {
        super(name, age, designation, salary);
        this.teamSize = teamSize;
    }
}

var employeeOne = new Manager("Mayank", 20, "Developer", 10000, 10);
console.log("Employee Count : " + Employees.count)

debugger;