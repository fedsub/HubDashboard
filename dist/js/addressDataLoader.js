$(document).ready(function(){let e;console.log("iets randoms"),fetch("http://167.99.222.47:8000/api/shipments").then(e=>e.json()).then(function(n){console.log(n),e=n;let t=document.getElementById("packageList"),l=t.createTHead().insertRow(0),r=l.insertCell(0),o=l.insertCell(1),s=l.insertCell(2),d=l.insertCell(3),c=l.insertCell(4),a=l.insertCell(5),b=l.insertCell(6);for(r.innerHTML="<b>Naam</b>",o.innerHTML="<b>Adres</b>",s.innerHTML="<b>Postcode</b>",d.innerHTML="<b>Telefoonnummer</b>",c.innerHTML="<b>ID</b>",a.innerHTML="<b>Aanpassen</b>",b.innerHTML="<b>Verwijderen</b>",i=0;i<e.length;i++){let n=t.insertRow(1);n.insertCell(0).innerHTML=e[i].name,n.insertCell(1).innerHTML=e[i].address,n.insertCell(2).innerHTML=e[i].zip,n.insertCell(3).innerHTML=e[i].phone,n.insertCell(4).innerHTML=e[i]._id;let l=e[i]._id;n.insertCell(5).innerHTML="link (volgt nog)",n.insertCell(6).innerHTML="<button id="+i+">Verwijderen</button>",document.getElementById(i).addEventListener("click",function(){fetch("http://167.99.222.47:8000/api/shipments/"+l,{method:"delete"}).then(setTimeout(location.reload.bind(location),500))})}}).catch(e=>console.error(e))});