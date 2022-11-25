// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let planetDestination = document.getElementById('missionTarget');
    planetDestination.innerHTML =`
    <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
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
    if (!testInput) {
        return 'Empty';
    }
    if (isNaN(testInput)) {
        return 'Not a number';
    } else return 'Is a number';
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus').innerHTML;
    let copilotStatus = document.getElementById('copilotStatus').innerHTML;
    let fuelStatus = document.getElementById('fuelStatus').innerHTML;
    let cargoStatus = document.getElementById('cargoStatus').innerHTML;
    let launchStatus = document.getElementById('launchStatus').innerHTML;

    let formResults = {
        pilotStatus: pilotStatus,
        copilotStatus: copilotStatus,
        fuelStatus: fuelStatus,
        cargoStatus: cargoStatus,
        launchStatus: launchStatus,
    }
  

    return formResults;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json().then(function (json){
            return json;
        })
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let num = Math.round(Math.random() * 5);
    return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
