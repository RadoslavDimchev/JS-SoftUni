function spiralMatrix(rows, cols) {
  const matrix = [];
  let [count, maxCount, minCol, maxCol, minRow, maxRow]
    = [0, rows * cols, 0, cols - 1, 0, rows - 1];

  for (let i = 0; i <= maxRow; i++) {
    matrix[i] = [];
  }

  while (count < maxCount) {
    for (let c = minCol; c <= maxCol && count < maxCount; c++) {
      matrix[minRow][c] = ++count;
    }

    minRow++;

    for (let r = minRow; r <= maxRow && count < maxCount; r++) {
      matrix[r][maxCol] = ++count;
    }

    maxCol--;

    for (let c = maxCol; c >= minCol && count < maxCount; c--) {
      matrix[maxRow][c] = ++count;
    }

    maxRow--;

    for (let r = maxRow; r >= minRow && count < maxCount; r--) {
      matrix[r][minCol] = ++count;
    }

    minCol++;
  }

  matrix.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);