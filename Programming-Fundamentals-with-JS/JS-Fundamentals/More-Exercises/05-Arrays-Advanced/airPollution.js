function airPollution(array, forces) {
    let matrix = [];

    for (let line of array) {
        let numbersArray = line.split(' ').map(Number);
        matrix.push(numbersArray);
    }

    for (let force of forces) {
        let tokens = force.split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);

        switch (command) {
            case 'breeze':
                breeze(value);
                break;
            case 'gale':
                gale(value);
                break;
            case 'smog':
                smog(value);
                break;
        }
    }

    let pollutedAreas = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] >= 50) {
                pollutedAreas.push(`[${i}-${j}]`);
            }
        }
    }

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }

    function breeze(row) {
        for (let col = 0; col < matrix.length; col++) {
            if (matrix[row][col] - 15 >= 0) {
                matrix[row][col] -= 15;
            } else {
                matrix[row][col] = 0;
            }
        }
    }

    function gale(col) {
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row][col] - 20 >= 0) {
                matrix[row][col] -= 20;
            } else {
                matrix[row][col] = 0;
            }
        }
    }

    function smog(value) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = matrix[i].map(x => x + value);
        }
    }
}

airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);
airPollution(['5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);
airPollution(['5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']);