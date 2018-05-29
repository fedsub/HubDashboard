
// GET the packages from API
let dataAddress;

    fetch("http://167.99.222.47:8000/api/shipments")
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            console.log(data);
            dataAddress = data;
        })
        .catch(error => console.error(error))
    