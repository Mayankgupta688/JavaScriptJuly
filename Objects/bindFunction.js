var user = {
    name: "Mayank",
    age: 25,
    designation: "Developer"
}

var otherUser = {
    name: "Anshul",
    age: 28,
    designation: "Manager"
}

function getName() {
    debugger;
    console.log(this.name)
}
getName();
debugger;
var contextBinding = getName.bind(user);
var contextBindingOther = getName.bind(otherUser);

debugger;
getName.call(user);


console.log(typeof(contextBinding));

contextBinding();
contextBindingOther();