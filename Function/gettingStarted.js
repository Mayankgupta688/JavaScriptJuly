function calculateData(countOne, countTwo) {
    return {
        valueOne: countOne,
        valueTwo: countTwo,
        sum: countOne + countTwo
    }
}

function returnArray(countOne, countTwo) {
    return [countOne, countTwo, countOne + countTwo]
}

var returnedData = returnArray(10, 30);

console.log(returnedData)
