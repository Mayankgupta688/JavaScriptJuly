function* myGenerator() {
    yield "1";
    yield "2";
    yield "3"
}

// var generator = myGenerator();

// var firstValue = generator.next();
// console.log(firstValue.value);
// var secondValue = generator.next();
// console.log(secondValue.value);
// var thirdValue = generator.next();
// console.log(thirdValue.value);

for(var data of myGenerator()) {
    debugger;
    console.log(data)
}
