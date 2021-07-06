var userName = "Mayank";
debugger;
// if(userName == "Mayank") {
//     console.log("Admin")
// } else if (userName == "Meha") {
//     console.log("User")
// } else if (userName == "Anshul") {
//     console.log("Super User")
// } else {
//     console.log("Unauthorized")
// }


switch(userName) {
    case "Mayank":
        console.log("Admin");
        break;

    case "Anshul":
        console.log("Super User");
        break;

    case "Meha":
        console.log("User");
        break;

    default:
        console.log("Unauthorized...");
        break;
}

var userName = 10;

switch(userName) {
    case 12:
        console.log("Value Greater than equal to 12");

    case 11:
        console.log("Value Greater than equal to 11");
        
    case 10:
        console.log("Value Greater than equal to 10");

    case 9:
        console.log("Value Greater than equal to 9");

    case 8:
        console.log("Value Greater than equal to 8");
}

console.log("End...")



