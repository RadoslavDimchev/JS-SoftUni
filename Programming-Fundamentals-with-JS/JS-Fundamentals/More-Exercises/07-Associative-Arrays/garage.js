function garage(input = []) {
    const garages = {};

    while (input.length > 0) {
        const [garage, carInfo] = input
            .shift()
            .split(' - ');

        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
        }

        garages[garage].push(`--- ${carInfo}`);
    }

    for (const garage in garages) {
        console.log(`Garage № ${garage}`);

        garages[garage]
            .forEach(car => console.log(car.replace(/: /g, ' - ')));
    }
}

// second solution without RegExp

/* function garage(input = []) {
    const garages = {};

    while (input.length > 0) {
        let [garage, carInfo] = input
            .shift()
            .split(' - ');

        carInfo = carInfo
            .split(': ')
            .join(' - ');

        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = new Set();
        }

        garages[garage].add(`--- ${carInfo}`);
    }

    for (const garage in garages) {
        console.log(`Garage № ${garage}`);

        garages[garage]
            .forEach(car => console.log(car));
    }
} */

garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);