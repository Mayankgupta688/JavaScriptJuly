var userData = {
    name: "X",
    age: 20
};

var clonedObject = {
    ...userData
};   

var clonedObjectOther = {
    ...userData
};

clonedObject.name = "Mayank";

console.log(clonedObject.name);
console.log(userData.name);