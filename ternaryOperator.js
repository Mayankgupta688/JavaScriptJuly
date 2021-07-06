var count = 10;

var message = "";

if(count > 5 ) {
    message = "Welcome to Session.."
} else {
    message = "Waiting for Participants..."
}

var ternaryMessage = count > 5 ? "Welcome to Session.." : "Waiting for Participants...";

console.log(ternaryMessage)