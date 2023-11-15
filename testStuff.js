function validateInput(testInput) {
    if (testInput === "") {
        return console.log("Empty");
    }
    if (isNaN(Number(testInput))) {
        return console.log("Not a Number");
    }
    if (typeof(Number(testInput)) === typeof(1)) {
        return console.log("Is a Number");
    }
 }


 validateInput("");

