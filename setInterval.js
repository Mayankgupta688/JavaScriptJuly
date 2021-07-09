var myInterval = setInterval(() => {
    console.log(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
}, 1000)

setTimeout(() => {
    clearInterval(myInterval)
}, 10000)