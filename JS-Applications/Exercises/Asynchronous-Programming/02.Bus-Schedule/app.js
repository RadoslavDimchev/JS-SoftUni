function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const info = document.getElementsByClassName('info')[0];

    let nextStopId = 'depot';
    let stopName;

    async function depart() {
        try {
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);
            const data = await response.json();

            nextStopId = data.next;
            stopName = data.name;

            info.textContent = `Next stop ${stopName}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            info.textContent = 'Error';
            departBtn.disabled = false;
            arriveBtn.disabled = false;
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();