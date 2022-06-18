function arrayManipulator(integers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let commandName = tokens.shift();
        let values = tokens.map(Number);

        switch (commandName) {
            case 'add':
                addElement(values);
                break;
            case 'addMany':
                addManyElements(values);
                break;
            case 'contains':
                containsElement(values);
                break;
            case 'remove':
                removeIndex(values);
                break;
            case 'shift':
                shiftPositions(values);
                break;
            case 'sumPairs':
                sumPairs();
                break;
            case 'print':
                print();
                break;
        }
    }

    function addElement(values) {
        let index = values[0];
        let element = values[1];
        integers.splice(index, 0, element);
    }

    function addManyElements(values) {
        let index = values.shift();
        integers.splice(index, 0, ...values);
    }

    function containsElement(values) {
        let element = values.shift();
        console.log(integers.indexOf(element));
    }

    function removeIndex(values) {
        let index = values.shift();
        integers.splice(index, 1);
    }

    function shiftPositions(values) {
        let positions = values.shift();
        for (let i = 0; i < positions; i++) {
            let firstElement = integers.shift();
            integers.push(firstElement);
        }
    }

    function sumPairs() {
        if (integers.length % 2 !== 0) {
            integers.push(0);
        }

        let sumPairs = [];
        let sum = 0;

        for (let i = 0; i < integers.length; i += 2) {
            sum = integers[i] + integers[i + 1];
            sumPairs.push(sum);
        }

        integers = [...sumPairs];
    }

    function print() {
        console.log(`[ ${integers.join(', ')} ]`);
    }
}


/* Second solution with one function

function arrayManipulator(integers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let commandName = tokens.shift();
        let values = tokens.map(Number);

        switch (commandName) {
            case 'add':
                let indexToAdd = values[0];
                let number = values[1];
                integers.splice(indexToAdd, 0, number);
                break;
            case 'addMany':
                let indexToAddMany = values.shift();
                integers.splice(indexToAddMany, 0, ...values);
                break;
            case 'contains':
                let element = values.shift();
                console.log(integers.indexOf(element));
                break;
            case 'remove':
                let indexRemove = values.shift();
                integers.splice(indexRemove, 1);
                break;
            case 'shift':
                let positions = values.shift();
                for (let i = 0; i < positions; i++) {
                    let firstElement = integers.shift();
                    integers.push(firstElement);
                }
                break;
            case 'sumPairs':
                if (integers.length % 2 !== 0) {
                    integers.push(0);
                }

                let sumPairs = [];
                let sum = 0;

                for (let i = 0; i < integers.length; i += 2) {
                    sum = integers[i] + integers[i + 1];
                    sumPairs.push(sum);
                }

                integers = [...sumPairs];
                break;
            case 'print':
                console.log(`[ ${integers.join(', ')} ]`);
                break;
        }
    }
} */

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);