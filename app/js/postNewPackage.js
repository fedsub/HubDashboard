// Post new address into api
function doSomething() {
	let xhr = new XMLHttpRequest();
	let url = "http://167.99.222.47:8000/api/shipments";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
		}

	};
	var data = JSON.stringify({
		"name": fullname.value,
		"address": address.value,
		"zip": zipcode.value,
		"zipNumbers": zipcode.value.replace(/\D/g, ''),
		"phone": phone.value
	});
	xhr.send(data);
	return false;
}
