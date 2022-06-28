function piccolo(input) {
    let parking = new Set();

    for (let line of input) {
        let [direction, number] = line.split(', ');

        if (direction === 'IN') {
            parking.add(number);
        } else {
            parking.delete(number);
        }
    }

    if (parking.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        Array
            .from(parking)
            .sort()
            .forEach(number => console.log(number));
    }
}

//second solution with Map
/* function piccolo(input) {
    let parking = new Map();

    for (let line of input) {
        let [direction, number] = line.split(', ');

        if (direction === 'IN') {
            parking.set(number);
        } else {
            parking.delete(number, 1);
        }
    }

    if (parking.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        Array
            .from(parking.keys())
            .sort()
            .forEach(number => console.log(number));
    }
} */

//third solution
/* function piccolo(input) {
    let parking = {};

    for (let line of input) {
        let [direction, number] = line.split(', ');

        if (direction === 'IN') {
            parking[number] = 1;
        } else {
            delete parking[number];
        }
    }

    let numbers = Object.keys(parking);

    if (numbers.length > 0) {
        numbers
            .sort()
            .forEach(number => console.log(number));
    } else {
        console.log('Parking Lot is Empty');
    }
} */


piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);