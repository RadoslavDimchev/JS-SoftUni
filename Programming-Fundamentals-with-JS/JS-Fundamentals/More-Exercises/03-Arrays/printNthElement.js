function printNthElement(arr) {
    let step = Number(arr.pop());
    let collection = [];

    for (let i = 0; i < arr.length; i += step) {
        collection.push(arr[i]);
    }

    console.log(collection.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);