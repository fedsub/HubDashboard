function doSomething(){let e=new XMLHttpRequest;e.open("POST","http://167.99.222.47:8000/api/shipments",!0),e.setRequestHeader("Content-Type","application/json"),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status)JSON.parse(e.responseText)};var a=JSON.stringify({name:fullname.value,address:address.value,zip:zipcode.value,zipNumbers:zipcode.value.replace(/\D/g,""),phone:phone.value});return e.send(a),alert("The package has been added!"),location.reload(),!1}