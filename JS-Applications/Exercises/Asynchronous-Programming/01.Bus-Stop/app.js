async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const list = document.getElementById('buses');

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        const data = await response.json();

        list.innerHTML = '';
        stopName.textContent = data.name;

        Object
            .entries(data.buses)
            .forEach(([busId, time]) => {
                const li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${time} minutes`;
                list.appendChild(li);
            });
    } catch (error) {
        list.innerHTML = '';
        stopName.textContent = 'Error';
    }
}

// then catch

// function getInfo() {
//     const stopId = document.getElementById('stopId').value;
//     const stopName = document.getElementById('stopName');
//     const list = document.getElementById('buses');

//     fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
//         .then(res => res.json())
//         .then(data => {
//             list.innerHTML = '';
//             stopName.textContent = data.name;

//             Object
//                 .entries(data.buses)
//                 .forEach(([busId, time]) => {
//                     const li = document.createElement('li');
//                     li.textContent = `Bus ${busId} arrives in ${time} minutes`;
//                     list.appendChild(li);
//                 });
//         })
//         .catch(error => {
//             list.innerHTML = '';
//             stopName.textContent = 'Error';
//         });
// }