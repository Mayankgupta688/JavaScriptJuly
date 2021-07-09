Rx.Observable.fromEvent(document.getElementById("container"), "click").subscribe(() => {
    console.log("Mouse Clicked....")
})


document.addEventListener("click", () => {
    console.log("Using JavaScript....")
})

// .2636321863 = 263.3343

var randomNumberGenerator = Rx.Observable.create((observer) => {
    setInterval(() => {
        observer.next(Math.floor(Math.random() * 1000))

        $.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/stockValue").then((data) => {
            observer.next(data)
        })
    }, 5000);
})

randomNumberGenerator.subscribe(stockValueEvaluator)
randomNumberGenerator.subscribe(stockValueDisplayer)


function stockValueEvaluator(data) {
    console.log(data)
}

function stockValueDisplayer(data) {
    console.log(data)
}