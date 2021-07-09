
var employee = {
    _name: "",
    set name(value) {
        this._name = value.replaceAll("_", "");
    },
    get name() {
        return this._name;
    }
}


employee.name = "Mayank ______ Gupta"; // Setter called

console.log(employee.name) // Getter Called