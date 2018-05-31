let packageZip = 3011;

// GET the district number and closest subway stop to packageZip
let dataHub;

fetch("https://bridge.buddyweb.fr/api/metrohubs/metrohaltes/" + packageZip)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
    dataHub = data;
  })
  .catch(error => console.error(error))