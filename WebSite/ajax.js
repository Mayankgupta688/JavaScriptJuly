var employeeListPromise = $.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");


employeeListPromise.then((data) => {
    for(var employee of data) {
        var elemnt = document.createElement("h3");
        elemnt.textContent = employee.name;
        document.getElementById("container").appendChild(elemnt);
    }
})