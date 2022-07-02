function flightSchedule(matrix) {
    const allFlights = matrix[0];
    const statuses = matrix[1];
    const neededStatus = matrix[2][0];

    const flights = {};
    const cancelledFlights = {};

    for (const info of allFlights) {
        const tokens = info.split(' ');
        const flight = tokens.shift();
        const destination = tokens.join(' ');

        flights[flight] = destination;
    }

    for (const info of statuses) {
        const [flight, status] = info.split(' ');
        const destination = flights[flight];

        if (flights.hasOwnProperty(flight)) {
            cancelledFlights[flight] = destination;
        }

        delete flights[flight];
    }

    if (neededStatus === 'Ready to fly') {
        for (const flight in flights) {
            console.log(`{ Destination: '${flights[flight]}', Status: 'Ready to fly' }`);
        }
    } else {
        Object
            .values(cancelledFlights)
            .sort((a, b) => a.localeCompare(b))
            .forEach(destn => console.log(`{ Destination: '${destn}', Status: 'Cancelled' }`));
    }
}


// Second solution with one object 

/* function flightSchedule(matrix) {
    const allFlights = matrix[0];
    const statuses = matrix[1];
    const neededStatus = matrix[2][0];

    const flights = {};

    for (const info of allFlights) {
        const tokens = info.split(' ');
        const flight = tokens.shift();
        const destination = tokens.join(' ');

        flights[flight] = { Destination: destination, Status: 'Ready to fly' };
    }

    for (const info of statuses) {
        const [flight, status] = info.split(' ');

        if (flights.hasOwnProperty(flight)) {
            flights[flight].Status = status;
        }
    }

    for (const flight in flights) {
        if (flights[flight].Status === neededStatus) {
            console.log(flights[flight]);
        }
    }
} */

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']]);

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']]);