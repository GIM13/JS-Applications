async function getInfo() {

    let stopId = document.getElementById(`stopId`).value;
    let stopName = document.getElementById(`stopName`);
    let submit = document.getElementById(`submit`);
    let buses = document.getElementById(`buses`);

    let response = await fetch(`http://localhost:3000/businfo`);
    let data = await response.json();

    stopName.innerHTML = data[stopId].name;
    console.log(stopName);
}