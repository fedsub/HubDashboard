// require('dotenv').config();

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


	fetch("https://graphhopper.com/api/1/vrp/optimize?key=335e9813-ae2a-438b-9eb4-a445763ac30e", {
		body: data,
		headers: {
			"Content-Type": "application/json"
		},
		method: "POST"
	})
	.then((resp) => resp.json())
	.then(function (data) {
		console.log(data);
	})

	console.log("test")

let JOB_ID = "7863454b-3f58-4953-8219-585ada2180bc";

//GET
fetch("https://graphhopper.com/api/1/vrp/solution/" + JOB_ID + "?key=" + API_KEY)
function getJob() {


fetch("https://graphhopper.com/api/1/vrp/solution/" +  JOB_ID + "?key=" + API_KEY)
	.then((resp) => resp.json()) // Transform the data into json
	.then(function (data) {
		console.log(data);
	 dataGraph = data;


	})
	.catch(error => console.error(error))

	}

	document.getElementById("getJobButton").addEventListener("click", getJob);
