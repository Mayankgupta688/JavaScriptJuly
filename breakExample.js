// Break will go out of entire loop


var totalSum = 0;
var data = [1, 2, 13, 6, 5, 8, 11];

for(var i = 0; i < data.length; i++) {

    if(data[i] == 13) {
        break;
    };

    totalSum = totalSum + data[i];
}

console.log(totalSum)