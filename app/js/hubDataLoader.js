let packageZip = 3011;

// GET the district number and closest subway stop to packageZip
function getData() {
     fetch("https://bridge.buddyweb.fr/api/metrohubs/metrohaltes/" + packageZip)
    var data = response.json()
	.then((resp) => resp.json()) // Transform the data into json
	.then(function (data) {
        filter(data)
        // console.log(data);
	})
    .catch(error => console.error(error))
}

console.log(data);
