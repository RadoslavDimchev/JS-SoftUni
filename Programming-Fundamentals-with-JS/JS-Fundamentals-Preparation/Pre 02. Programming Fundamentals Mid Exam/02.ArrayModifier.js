function arrayModifier(array) {
    let modifiedArray = array.shift().split(' ').map(Number);

    for (let command of array) {
        command = command.split(' ');
        let commandName = command[0];
        let firstIndex = Number(command[1]);
        let secondIndex = Number(command[2]);
        switch (commandName) {
            case 'swap':
                let temp = modifiedArray[firstIndex];
                modifiedArray.splice(firstIndex, 1, modifiedArray[secondIndex]);
                modifiedArray.splice(secondIndex, 1, temp);
                break;
            case 'multiply':
                let multiply = modifiedArray[firstIndex] * modifiedArray[secondIndex];
                modifiedArray.splice(firstIndex, 1, multiply);
                break;
            case 'decrease':
                modifiedArray = modifiedArray.map(x => x - 1);
                break;
            case 'end':
                break;
        }
    }

    console.log(modifiedArray.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);