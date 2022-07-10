function piccolo(input = []) {
    // create a colletion
    const parking = new Set();

    // for every line 
    while (input.length > 0) {
        // parse input
        const [direction, carNumber] = input
            .shift()
            .split(', ');

        // - check direction
        if (direction === 'IN') {
            // -- add number
            parking.add(carNumber);
        } else {
            // -- delete number
            parking.delete(carNumber);
        }
    }

    // sort numbers in ascending
    const resultParking = Array
        .from(parking)
        .sort();

    // print on a new line or message
    console.log(resultParking.length > 0 ?
        resultParking.join('\n') : 'Parking Lot is Empty'
    );
}

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