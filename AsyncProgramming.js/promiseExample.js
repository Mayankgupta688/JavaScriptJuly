function createPromise() {
    debugger;
    var myPromise = new Promise((resolve, reject) => {
        debugger;
        setTimeout(() => {
            debugger;
            resolve("This is Technofunnel");
        }, 15000)
    })

    debugger
    return myPromise;
}

async function getResponse() {
    debugger;
    var response = createPromise();
    await response.then((data) => {
        debugger
        console.log(data)
    })
    debugger;
    console.log("Hello World...")
    console.log("asdjfsadkvsa");
    console.log("ashdaskjdgka")
}

getResponse();



