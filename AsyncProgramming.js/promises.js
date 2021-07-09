debugger;

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        debugger;
        resolve("This is Technofunnel");
    }, 5000)
})

debugger;

myPromise.then((data) => {
    debugger
    console.log(data);
    return "Mayank Gupta"
}, (data) => {
    debugger;
    console.log(`Rejected with the reason: ${data}`)
}).then((data) => {
    debugger;
    console.log(data)
})
