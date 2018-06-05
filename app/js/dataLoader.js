require('dotenv').config();

// const API_KEY = process.env.GRAPHHOPPER_API_KEY;
const API_KEY = "276cd647-0bdb-4ad0-897f-4b3e9ed317fc";
url = "https://graphhopper.com/api/1/vrp/optimize?key=" + API_KEY;

// The data we are going to send in our request
let data = {
  "vehicles": [
    {
      "vehicle_id": "my_vehicle",
      "start_address": {
        "location_id": "berlin",
        "lon": 13.406,
        "lat": 52.537
      }
    }
  ],
  "services": [
    {
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

var dataGraph;
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
	fetch("https://graphhopper.com/api/1/vrp/optimize?key=" + API_KEY, {
		body: data,
		headers: {
			// "Access-Control-Allow-Origin": "*",
			// "Content-Type": "application/json",
			// "Accept": "application/json; charset=utf-8",
			// 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
			'Content-Type': 'application/json'
		},
		method: "POST"
	})
		.then((resp) => resp.json())
		.then(function (data) {
			console.log(data);
		})
		.catch((error) => console.log(error))
	// var ghRouting = new GraphHopper.Routing({
	// 	key: API_KEY,
	// 	vehicle: "car",
	// 	elevation: false
	// });

	// ghRouting.addPoint(new GHInput(47.400905, 8.534317));
	// ghRouting.addPoint(new GHInput(47.394108, 8.538265));

	// ghRouting.doRequest()
	// 	.then(function(json) {
	// 		// Add your own result handling here
	// 		console.log(json);
	// 	})
	// 	.catch(function(err) {
	// 		console.error(err.message);
	// 	});
}

postProblem();

let JOB_ID = "86c1c58b-5104-47e6-b43c-899d4f2e7c77";

function getSolution() {
	fetch("http://localhost/GH_post/post.php")
		.then((resp) => resp.json()) // Transform the data into json
		.then(function (data) {
			console.log(data);
		})
		.catch((error) => console.error(error))
}


// function getSolution() {
// 	fetch("https://graphhopper.com/api/1/vrp/solution/" + JOB_ID + "?key=" + API_KEY)
// 		.then((resp) => resp.json()) // Transform the data into json
// 		.then(function (data) {
// 			console.log(data);
// 		})
// 		.catch((error) => console.error(error))
// }

document.getElementById("getJobButton").addEventListener("click", getSolution);
