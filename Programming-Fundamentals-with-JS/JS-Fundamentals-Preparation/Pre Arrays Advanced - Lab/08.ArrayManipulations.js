function arrayManipulations(array) {
    let arrayToManipualte = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }

    function add(number) {
        arrayToManipualte.push(number);
    }

    function remove(number) {
        arrayToManipualte = arrayToManipualte.filter(x => x !== number);
    }

    function removeAt(number) {
        arrayToManipualte.splice(number, 1);
    }

    function insert(number, index) {
        arrayToManipualte.splice(index, 0, number);
    }

    console.log(arrayToManipualte.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);