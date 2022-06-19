function equalNeighbors(matrix) {
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentArray = matrix[i];
        let nextArray = matrix[i + 1];

        for (let j = 0; j < currentArray.length; j++) {
            let currentElement = currentArray[j];
            let nextElement = currentArray[j + 1];
            if (currentElement === nextElement) {
                counter++;
            }

            if (nextArray !== undefined) {
                if (currentElement === nextArray[j]) {
                    counter++;
                }
            }
        }
    }

    console.log(counter);
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]);
equalNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);