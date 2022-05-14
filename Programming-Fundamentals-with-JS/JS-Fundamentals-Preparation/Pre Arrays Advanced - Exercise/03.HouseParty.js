function houseParty(array) {
    let list = [];

    for (let command of array) {
        command = command.split(' ');
        let name = command[0];
        let isIncluded = list.includes(name);
        if (command.length === 3) {
            if (isIncluded) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else if (command.length === 4) {
            let indexOfPerson = list.indexOf(name);
            if (indexOfPerson !== -1) {
                list.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(list.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);