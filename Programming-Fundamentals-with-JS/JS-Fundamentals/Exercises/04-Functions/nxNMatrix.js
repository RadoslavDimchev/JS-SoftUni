function nxNMatrix(number) {
    let matrix = [];

    for (let i = 0; i < number; i++) {
        let row = [];

        for (let j = 0; j < number; j++) {
            row.push(number);
        }

        matrix.push(row.join(' '));
    }

    console.log(matrix.join('\n'));
}

nxNMatrix(3);
nxNMatrix(7);
nxNMatrix(2);