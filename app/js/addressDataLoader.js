console.log("iets randoms")

// GET the packages from API
let dataAddress;

//TODO: This fetch is also done in DataLoader.
fetch("http://167.99.222.47:8000/api/shipments")
	.then((resp) => resp.json()) // Transform the data into json
	.then(function (data) {
		// console.log(data)

		dataAddress = data;
		let table = document.getElementById("packageList");
		if (table) {
			let Header = table.createTHead();
			let row = Header.insertRow(0);
			let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
			let cell3 = row.insertCell(2);
			let cell4 = row.insertCell(3);
			let cell5 = row.insertCell(4);
			let cell6 = row.insertCell(5);
			let cell7 = row.insertCell(6);
                // Auto sort the table by clicking the table headers
                cell1.addEventListener("click", function(){sortTable(0)})
                cell2.addEventListener("click", function(){sortTable(1)})
                cell3.addEventListener("click", function(){sortTable(2)})
                cell1.innerHTML = "<b class = dropdown>Naam</b><i class='tiny center material-icons dropdown'>arrow_drop_down</i>";
                cell2.innerHTML = "<b class = dropdown>Adres</b><i class='tiny center material-icons dropdown'>arrow_drop_down</i>";
                cell3.innerHTML = "<b class = dropdown>Postcode</b><i class='tiny center material-icons dropdown'>arrow_drop_down</i>";
				cell4.innerHTML = "<b>Telefoonnummer</b>";
				cell5.innerHTML = "<b>ID</b>";
				cell6.innerHTML = "<b>Aanpassen</b>";
				cell7.innerHTML = "<b>Verwijderen</b>";
			
			for (i = 0; i < dataAddress.length; i++) {
				let row = table.insertRow(1);
				let cell1 = row.insertCell(0);
				cell1.innerHTML = dataAddress[i].name;
				let cell2 = row.insertCell(1);
				cell2.innerHTML = dataAddress[i].address;
				let cell3 = row.insertCell(2);
				cell3.innerHTML = dataAddress[i].zip;
				let cell4 = row.insertCell(3);
				cell4.innerHTML = dataAddress[i].phone;
				let cell5 = row.insertCell(4);
				cell5.innerHTML = dataAddress[i]._id;
				let id = dataAddress[i]._id;
				let cell6 = row.insertCell(5);
				cell6.innerHTML = "link (volgt nog)";
				let cell7 = row.insertCell(6);
				cell7.innerHTML = "<button id=" + i + ">Verwijderen</button>";
				let button = document.getElementById(i);
				button.addEventListener('click', () => {
					deleteData(id)					
				});
			}
		}
	})
	.catch(error => console.error(error))

function deleteData(item) {
	return fetch('http://167.99.222.47:8000/api/shipments/' + item, {
		method: 'delete'
	})
		.then(setTimeout(location.reload.bind(location), 500))		
}
