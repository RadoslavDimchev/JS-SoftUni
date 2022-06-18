function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacityOfWagon = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
        } else {
            for (let j = 0; j < wagons.length; j++) {
                let passengers = Number(command[0]);

                if (passengers + wagons[j] <= maxCapacityOfWagon) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);