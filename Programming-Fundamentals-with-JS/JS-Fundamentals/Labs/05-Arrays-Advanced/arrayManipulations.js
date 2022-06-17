function arrayManipulations(arr) {
    let arrayToManipulate = arr.shift().split(' ').map(Number);

    while (arr.length > 0) {
        let [command, firstNumber, secondNumber] = arr.shift().split(' ');
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case 'Add':
                add(firstNumber); break;
            case 'Remove':
                remove(firstNumber); break;
            case 'RemoveAt':
                removeAt(firstNumber); break;
            case 'Insert':
                insert(firstNumber, secondNumber); break;
        }
    }

    console.log(arrayToManipulate.join(' '));

    function add(number) {
        arrayToManipulate.push(number);
    }

    function remove(number) {
        arrayToManipulate = arrayToManipulate.filter(x => x !== number);
    }

    function removeAt(number) {
        arrayToManipulate.splice(number, 1);
    }

    function insert(number, index) {
        arrayToManipulate.splice(index, 0, number);
    }
}

/* second solution only with swicth and one function

function arrayManipulations(arr) {
    let arrayToManipulate = arr.shift().split(' ');

    while (arr.length > 0) {
        let [command, firstNumber, secondNumber] = arr.shift().split(' ');

        switch (command) {
            case 'Add':
                arrayToManipulate.push(firstNumber);
                break
            case 'Remove':
                arrayToManipulate = arrayToManipulate.filter(x => x !== firstNumber);
                break;
            case 'RemoveAt':
                arrayToManipulate.splice(firstNumber, 1);
                break;
            case 'Insert':
                arrayToManipulate.splice(secondNumber, 0, firstNumber);
                break;
        }
    }

    console.log(arrayToManipulate.join(' '));
} */

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