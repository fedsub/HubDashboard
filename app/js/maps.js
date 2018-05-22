var googleMapsClient = require('@google/maps').createClient({
	key: 'AIzaSyB6I4m0PabqJB2oAEJoatzYbNpnsUFhJsY'
});

function myMap() {
	var mapProp = {
		center: new google.maps.LatLng(51.508742, -0.120850),
		zoom: 5,
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

window.addEventListener("load", () => {
	myMap();
	console.log("MOEDER");
});
