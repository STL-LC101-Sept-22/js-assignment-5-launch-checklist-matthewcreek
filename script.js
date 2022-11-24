// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.getElementById('formSubmit');
    let pilotForm = document.getElementById('pilotName');
    let copilotForm = document.getElementById('copilotName');
    let fuelForm = document.getElementById('fuelLevel');
    let cargoForm = document.getElementById('cargoMass');
    
    form.addEventListener('click', function(event){
     if (validateInput(pilotForm) === 'Empty'){
        alert('all forms must be entered')
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