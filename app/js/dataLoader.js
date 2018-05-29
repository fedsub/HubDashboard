// require('dotenv').config();

// const API_KEY = process.env.GRAPHHOPPER_API_KEY;
const API_KEY = "5a4f6201-53d3-419c-920f-7970a6c183e9";
url = "https://graphhopper.com/api/1/vrp/optimize?key=" + API_KEY;

// The data we are going to send in our request
let data = {
  "vehicles": [{
    "vehicle_id": "my_vehicle",
    "start_address": {
      "location_id": "berlin",
      "lon": 13.406,
      "lat": 52.537
    }
  }],
  "services": [{
      "id": "hamburg",
      "name": "visit_hamburg",
      "address": {
        "location_id": "hamburg",
        "lon": 9.999,
        "lat": 53.552
      }
    },
    {
      "id": "munich",
      "name": "visit_munich",
      "address": {
        "location_id": "munich",
        "lon": 11.57,
        "lat": 48.145
      }
    },
    {
      "id": "cologne",
      "name": "visit_cologne",
      "address": {
        "location_id": "cologne",
        "lon": 6.957,
        "lat": 50.936
      }
    },
    {
      "id": "frankfurt",
      "name": "visit_frankfurt",
      "address": {
        "location_id": "frankfurt",
        "lon": 8.67,
        "lat": 50.109
      }
    }
  ]
}

// The parameters we are gonna pass to the fetch function
let fetchData = {
  method: 'POST',
  body: data,
  headers: new Headers({
    'Content-Type': 'application/json',
    // 'Accept': 'application/json'
  })
}

//POST
// fetch(url, fetchData)
// 	.then((resp) => resp.json())
// 	.then(function (data) {
// 		// Handle response you get from the server
// 		console.log(data);
// 	});

function postProblem() {
  fetch("https://graphhopper.com/api/1/vrp/optimize?key=335e9813-ae2a-438b-9eb4-a445763ac30e", {
      body: data,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json; charset=utf-8"
      },
      method: "POST"
    })
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data);
    })
    .catch((error) => console.log(error))
}

postProblem();


let JOB_ID = "86c1c58b-5104-47e6-b43c-899d4f2e7c77";

var dataGraph;


function getSolution() {
  fetch("https://graphhopper.com/api/1/vrp/solution/" + JOB_ID + "?key=" + API_KEY)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      console.log(data);
			dataGraph = data;

    })
    .catch((error) => console.error(error))
}

document.getElementById("getJobButton").addEventListener("click", getSolution);

var mapslink = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyB6I4m0PabqJB2oAEJoatzYbNpnsUFhJsY&origin=Oslo+Norway&destination=Telemark+Norway"
  const mapsFrame = document.querySelector('iframe');
  mapsFrame.setAttribute('src', mapslink)
