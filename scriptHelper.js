// Write your helper functions here!
require('isomorphic-fetch');

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
    if (!testInput) {
        return 'Empty';
    }
    if (isNaN(testInput)) {
        return 'Not a number';
    } else return 'Is a number';
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let valueArr = [];
    let formResults = {
        list: list,
        pilot: pilot.value,
        copilot: copilot.value,
        fuelLevel: fuelLevel.value,
        cargoLevel: cargoLevel.value,
        formValues: valueArr,
    };
    valueArr.push(validateInput(pilot.value));
    valueArr.push(validateInput(copilot.value));
    valueArr.push(validateInput(fuelLevel.value));
    valueArr.push(validateInput(cargoLevel.value));


    return formResults;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        response.json().then(function (json){
            console.log(json);
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
