var userData = [1, 2, 3, 4, 5, 6, 7, 56];

var newArray = userData.map((data) => {

    if(data == 5) {
        return "Null Value";
    }
    return data + 10
})

debugger;

var evenValues = userData.filter((data) => {
    return data % 2 == 0
})

debugger;

var newArrayData = [];
for(let i = 0; i< userData.length; i++) {
    newArrayData.push(userData[i] + 10)
}

debugger;