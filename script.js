// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.getElementById('formSubmit');
    let pilotForm = document.querySelector('input[name=pilotName]');
    let copilotForm = document.querySelector('input[name=copilotName]');
    let fuelForm = document.querySelector('input[name=fuelLevel]');
    let cargoForm = document.querySelector('input[name=cargoMass]');

    let listFaulty = document.getElementById('faultyItems');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');
    let fuelLaunch;
    let cargoLaunch;

    form.addEventListener('click', function (event) {
        let submission = formSubmission(this.document, listFaulty, pilotForm, copilotForm, fuelForm, cargoForm);

        console.log(submission)

        if (submission.formValues[0] !== 'Not a number') {
            alert('All forms must be filled out correctly');
            event.preventDefault();
        } else if (submission.formValues[1] !== 'Not a number') {
            alert('All forms must be filled out correctly');
            event.preventDefault();
        } else if (submission.formValues[2] !== 'Is a number') {
            alert('Field must be a number');
            event.preventDefault();
        } else if (submission.formValues[3] !== 'Not a number') {
            alert('Field must be a number');
            event.preventDefault();
        }

        if (submission.formValues[0] === 'Not a number' && submission.formValues[1] === 'Not a number') {
            listFaulty.style.visibility = 'visible'
            pilotStatus.innerText = `Pilot ${pilotForm.value} is ready for launch.`
            copilotStatus.innerText = `Copilot ${copilotForm.value} is ready for launch.`
            if (fuelForm.value < 10000) {
                fuelStatus.innerText = 'Fuel level too low for launch.';
                launchStatus.innerText = 'Shuttle not ready for launch';
                launchStatus.style.color = 'red';
                fuelLaunch = false;
                event.preventDefault();
            } else if (fuelForm.value >= 10000) {
                fuelStatus.innerText = 'Fuel level high enough for launch.';
                fuelLaunch = true;
            }
            if (cargoForm.value > 10000) {
                cargoStatus.innerText = 'Cargo mass too heavy for launch.';
                launchStatus.innerText = 'Shuttle not ready for launch';
                launchStatus.style.color = 'red';
                cargoLaunch = false;
                event.preventDefault();
            } else if (cargoForm.value <= 10000) {
                cargoStatus.innerText = 'Cargo mass light enough for launch.';
                cargoLaunch = true;
            }
            if (cargoLaunch && fuelLaunch) {
                launchStatus.innerText = 'Shuttle is ready for launch';
                launchStatus.style.color = 'green';
                event.preventDefault();
            }
        }



    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })





});