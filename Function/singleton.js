var returnedValue = (function xyz(){
    var name = "Mayank";
    var age = 10

    function getDetails() {
        console.log(name + " " + age)
    }

    return {
        getDetails: getDetails
    }
})();

debugger;

xyz()

returnedValue.getDetails()