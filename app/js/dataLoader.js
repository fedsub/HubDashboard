// require('dotenv').config();

// const API_KEY = process.env.GRAPHHOPPER_API_KEY;
const API_KEY = "5a4f6201-53d3-419c-920f-7970a6c183e9	";
url = "https://graphhopper.com/api/1/vrp/optimize?key=" + API_KEY;

// fetch("https://graphhopper.com/api/1/vrp/optimize?key=5a4f6201-53d3-419c-920f-7970a6c183e9", {
// 	body: data,
// 	headers: {
// 		"Content-Type": "application/json",
// 		"Accept": "application/json; charset=utf-8"
// 	},
// 	method: "POST"
// })
// 	.then((resp) => resp.json())
// 	.then(function (data) {
// 		console.log(data);
// 	})
// 	.catch((error) => console.log(error))

//POST
// fetch(url, fetchData)
// 	.then((resp) => resp.json())
// 	.then(function (data) {
// 		// Handle response you get from the server
// 		console.log(data);
// 	});


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

async function getShipments() {
	let data = await fetch("http://167.99.222.47:8000/api/shipments")
		.then((resp) => resp.json()) // Transform the data into json
	let shipmentsData = data

	// console.log(shipmentsData)
	return shipmentsData
}

async function postProblem() {
	let shipmentsData = await getShipments()
	console.log(shipmentsData)

	// The parameters we are gonna pass to the fetch function
	let fetchData = {
		method: 'POST',
		body: shipmentsData,
		headers: new Headers({
			// 'Content-Type': 'application/json',
			// 'Accept': 'application/json'
		})
	}

	fetch("http://milansosef.nl/post.php", fetchData)
		.then((resp) => resp.json())
		.then(function (data) {
			console.log(data);
		})
		.catch((error) => console.log(error))
}

postProblem();

async function getJobID() {
	let data = await fetch("http://milansosef.nl/post.php")
		.then((resp) => resp.json()) // Transform the data into json
	let JOB_ID = data.job_id

	// console.log(JOB_ID)
	return JOB_ID
}

async function getSolution() {
	let JOB_ID = await getJobID()
	console.log(JOB_ID)
	let data = await fetch("https://graphhopper.com/api/1/vrp/solution/" + JOB_ID + "?key=" + API_KEY)
		.then((resp) => resp.json()) // Transform the data into json
	let dataGraph = data

	console.log(dataGraph)
	// return dataGraph
}

document.getElementById("getJobButton").addEventListener("click", getSolution);
