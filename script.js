// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.getElementById('formSubmit');
    let pilotForm = document.querySelector('input[name=pilotName]');
    let copilotForm = document.querySelector('input[name=copilotName]');
    let fuelForm = document.querySelector('input[name=fuelLevel]');
    let cargoForm = document.querySelector('input[name=cargoMass]');

    form.addEventListener('click', function (event) {
        if (validateInput(pilotForm.value) !== 'Not a number') {
            alert('All forms must be filled out correctly');
            event.preventDefault();
        } else if (validateInput(copilotForm.value) !== 'Not a number') {
            alert('All forms must be filled out correctly');
            event.preventDefault();
        } else if (validateInput(fuelForm.value) !== 'Is a number') {
            alert('All forms must be filled out correctly');
            event.preventDefault();
        } else if (validateInput(cargoForm.value) !== 'Is a number') {
            alert('All forms must be filled out correctly');
            event.preventDefault();
        }


    })
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





});