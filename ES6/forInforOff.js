var arrayData = [{
    name: "Mayank",
    age: 20
}, {
    name: "Anshul",
    age: 30
}];

for(data of arrayData) {
    console.log(data.name)
}

for(var i = 0; i< arrayData.length; i++) {
    console.log(arrayData[i]);
}

var arrayData = [{
    name: "Mayank",
    age: 20
}, {
    name: "Anshul",
    age: 30
}];

for(data of arrayData) {
     debugger;
    console.log(data.name)
}

for(var i = 0; i< arrayData.length; i++) {
    console.log(arrayData[i].name);
}