function diagonalAttack(arr) {
  const matrix = arr
    .map(line => line.split(' ').map(Number));
  const matrixLength = matrix.length;
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < matrixLength; i++) {
    firstDiagonal += matrix[i][i];
    secondDiagonal += matrix[i][matrixLength - 1 - i];
  }

  if (firstDiagonal === secondDiagonal) {

    for (let i = 0; i < matrixLength; i++) {
      for (let j = 0; j < matrixLength; j++) {

        if (i !== j && j !== matrixLength - 1 - i) {
          matrix[i][j] = firstDiagonal;
        }
      }
    }
  }

  matrix.forEach(row => console.log(row.join(' ')));
}

diagonalAttack(['5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1']);
diagonalAttack(['1 1 1',
  '1 1 1',
  '1 1 0']);