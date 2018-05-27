
// GET the district number and closest subway stop to packageZip
let dataAddress;

    fetch("http://167.99.222.47:8000/api/shipments")
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            console.log(data);
         dataHub = data;
        })
        .catch(error => console.error(error))
    