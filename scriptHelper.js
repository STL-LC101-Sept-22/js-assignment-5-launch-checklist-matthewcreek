// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let planetDestination = document.getElementById('missionTarget');
    planetDestination.innerHTML = `
    <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    if (!testInput) {
        return 'Empty';
    }
    if (isNaN(testInput)) {
        return 'Not a Number';
    } else return 'Is a Number';
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const launchStatus = document.getElementById('launchStatus');

    let pilotValidate = validateInput(pilot.value);
    let copilotValidate = validateInput(copilot.value);
    let fuelValidate = validateInput(fuelLevel.value);
    let cargoValidate = validateInput(cargoLevel.value);

    let dataStatus = ''
    let launchReady = ''
    let fuelLaunch;
    let cargoLaunch;

    if (pilotValidate === 'Empty' || copilotValidate === 'Empty') {
        dataStatus = 'missing data';
    } else if (pilotValidate !== 'Not a Number' || copilotValidate !== 'Not a Number') {
        dataStatus = 'improper data';
    } else if (fuelValidate !== 'Is a Number' || cargoValidate !== 'Is a Number') {
        dataStatus = 'improper data';
        launchStatus.innerText = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
    };
    if (pilotValidate === 'Not a Number' && copilotValidate === 'Not a Number') {
        list.style.visibility = 'visible';
        pilotStatus.innerText = `Pilot ${pilot.value} is ready for launch`;
        copilotStatus.innerText = `Co-pilot ${copilot.value} is ready for launch`;

        if (fuelValidate === 'Not a Number' || fuelValidate === 'Empty') {
            fuelStatus.innerText = 'Fuel level unknown';
            fuelLaunch = false;
        } else if (fuelLevel.value < 10000) {
            fuelStatus.innerText = 'Fuel level too low for launch';
            fuelLaunch = false;
        } else if (fuelLevel.value >= 10000) {
            fuelStatus.innerText = 'Fuel level high enough for launch';
            fuelLaunch = true;
        };
        if (cargoLevel.value > 10000) {
            cargoStatus.innerText = 'Cargo mass too heavy for launch';
            cargoLaunch = false;
        } else if (cargoValidate === 'Empty' || cargoValidate === 'Not a Number') {
            cargoStatus.innerText = 'Cargo mass unknown.';
            cargoLaunch = false;       
        } else if (cargoLevel.value <= 10000) {
            cargoStatus.innerText = 'Cargo mass low enough for launch';
            cargoLaunch = true;
        };
        if (cargoLaunch && fuelLaunch) {
            launchStatus.innerText = 'Shuttle is Ready for Launch';
            launchStatus.style.color = 'green';
            launchReady = 'launch ready'
            list.style.visibility = 'visible';
        } else {
            launchReady = 'no launch';
            launchStatus.innerText = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'red';
            list.style.visibility = 'visible';
        };
    };
    
    let formValues = {
        dataStatus: dataStatus,
        launchReady: launchReady,
        launchStatus: launchStatus,
    };
    
    return formValues;
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json().then(function (json) {
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
