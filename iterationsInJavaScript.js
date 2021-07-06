var employeeSalaryList = [10, 2, 3, 78, 54, 65, 45, 23, 34, 8, 10];

var empNames = ["Mayank", "Meha", "Anshul"];

debugger;

var totalSalary = 0;

for(var i = 0; i < 11 ; i++) {
    totalSalary = totalSalary + employeeSalaryList[i]
    console.log(i)
    console.log(totalSalary)
}


for(var j=1; j<empNames.length;j++) {
    console.log(empNames[j])
}

console.log(totalSalary)