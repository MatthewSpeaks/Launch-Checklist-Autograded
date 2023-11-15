// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(Number(testInput))) {
        return "Not a Number";
    }
    if (typeof(Number(testInput)) === typeof(1)) {
        return "Is a Number";
    }
 }

/*let list = document.getElementById("faultyItems");
let h2 = document.getElementById("launchStatus");
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");

let formInput = document.getElementById("testForm");*/

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    window.alert("All fields are required!");
    // checking to see if form fields are empty. If they are, call event.preventDefault to stop the submission. 
    let arrayOne = [pilot, copilot, fuelLevel, cargoLevel]
    for (let i = 0; i < arrayOne.length; i++) {
        if (validateInput(arrayOne[i]) === "Empty") {
        event.preventDefault();
    };
    }

    // checking to make sure pilot and copilot fields are strings. 
    let arrayTwo = [pilot, copilot];
    for (let i = 0; i < arrayTwo.length; i++) {
        if (validateInput(arrayTwo[i]) === "Is a Number") {
        event.preventDefault();
    };
    }

    // checking to make sure fuelLevel and cargoLevel are numbers.
    let arrayThree = [fuelLevel, cargoLevel];
    for (let i = 0; i < arrayThree.length; i++) {
        if (validateInput(arrayThree[i]) === "Not a Number") {
            event.preventDefault();
        }
    }

    // condidtionals to update the return form based on the form input. 
   

 } // end of function
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;