function arrayModifier(input) {
    let arrOfIntegers = input
        .shift()
        .split(' ')
        .map(Number);

    while (input[0] !== 'end') {
        let [command, index1, index2] = input.shift().split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        switch (command) {
            case 'swap':
                let temp = arrOfIntegers[index1];
                arrOfIntegers[index1] = arrOfIntegers[index2];
                arrOfIntegers[index2] = temp;
                break;
            case 'multiply':
                arrOfIntegers[index1] *= arrOfIntegers[index2];
                break;
            case 'decrease':
                arrOfIntegers = arrOfIntegers.map(x => x - 1);
                break;
        }
    }

    console.log(arrOfIntegers.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);