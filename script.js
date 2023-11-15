// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

let list = document.getElementById("faultyItems");
let h2 = document.getElementById("launchStatus");
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");

let formInput = document.getElementById("testForm");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    })

    let form = document.querySelector("testForm");
    form.addEventListener("submit", function(event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");
    formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
    /*if (usernameInput.value === "" || teamName.value === "") {
        alert("All fields are required!");
        // stop the form submission
        event.preventDefault();
    }*/
    });
 });
