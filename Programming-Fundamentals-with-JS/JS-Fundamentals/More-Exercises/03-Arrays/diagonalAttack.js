function diagonalAttack(arr) {
    let matrix = [];
    let fDiagonalSum = 0;
    let sDiagonalSum = 0;
    let length = arr.length;

    getDiagonalSums(arr);
    changeMatrix(fDiagonalSum, sDiagonalSum);
    printMatrix();

    function getDiagonalSums(arr) {
        arr.forEach(element => matrix.push(element.split(' ')));

        for (let i = 0, j = length - 1; i < length; i++, j--) {
            fDiagonalSum += Number(matrix[i][i]);
            sDiagonalSum += Number(matrix[i][j]);
        }
    }

    function changeMatrix(fDiagonalSum, sDiagonalSum) {
        if (fDiagonalSum === sDiagonalSum) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length; j++) {
                    if (i != j && i != length - 1 - j) {
                        matrix[i][j] = fDiagonalSum;
                    }
                }
            }
        }
    }

    function printMatrix() {
        matrix.forEach(el => console.log(el.join(' ')));
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);