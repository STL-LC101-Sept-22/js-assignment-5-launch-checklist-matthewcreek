// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.getElementById('formSubmit');
    let pilotForm = document.querySelector('input[name=pilotName]');
    let copilotForm = document.querySelector('input[name=copilotName]');
    let fuelForm = document.querySelector('input[name=fuelLevel]');
    let cargoForm = document.querySelector('input[name=cargoMass]');
    let listFaulty = document.getElementById('faultyItems');

    form.addEventListener('click', function (event) {
        const submission = formSubmission(document, listFaulty, pilotForm, copilotForm, fuelForm, cargoForm);
        console.log(submission.dataStatus);
        console.log(submission.launchReady)

        switch (submission.dataStatus) {
            case 'missing data':
                alert('All fields are required!');
                event.preventDefault();
                break;
            case 'improper data':
                alert('Make sure to enter valid information for each field!');
                event.preventDefault();
                break;
            case '':
                switch (submission.launchReady){
                    case 'launch ready':
                        event.preventDefault();
                        break;
                    case 'no launch':
                        event.preventDefault();
                        break;
                    case '':
                        console.log('launch status unknown');
                        event.preventDefault();
                        break;
                    default:
                        console.log('blank launch ready');
                        event.preventDefault();
                };
                break;
            default:
                console.log('blank data status');
                event.preventDefault();
        };
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
        let chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(this.document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
    })

});