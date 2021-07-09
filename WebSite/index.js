function updateColorRed(event) {
    debugger;
    alert("Color to Red")
}

function updateColorGreen(event) {

    var data = ["blue", "green", "yellow", "orange", "purple"]
    alert("Color to Green");
    var i = 0;
    setInterval(() => {
        document.getElementById("root").style.color = data[i];
        i++;
        i = i % 5;
    }, 1000)

    document.getElementById("root").style.color = "green";
}

function updateColorBlue(event) {
    alert("Color to Blue");
    document.getElementById("root").style.position = "relative";
    var leftSpacing = 0;
    setInterval(() => {
        document.getElementById("root").style.left = leftSpacing;
        leftSpacing = (leftSpacing + 5) % 200;
    }, 200)
}

function appendText(event) {
    let secondHeader = document.createElement("h2");
    secondHeader.innerText = "Session by Mayank Gupta.....";
    secondHeader.style.color = "aqua";

    document.getElementById("root").appendChild(secondHeader);
}

function changeOccurred() {
    document.getElementById("headerValue").textContent = `Welcome to ${document.getElementById("userInput").value}`
}


setInterval(() => {
    document.getElementById("current_time").textContent = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
}, 1000)
