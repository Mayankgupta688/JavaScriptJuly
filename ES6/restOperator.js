var arrayData = [10, 20, 30, 40, 50, 60]

function sampleFunction(a, b, ...c) {
    debugger;
    console.log(a);
    console.log(b);
    console.log(c);
}

sampleFunction(...arrayData);