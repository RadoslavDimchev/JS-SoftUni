function equalNeighbors(matrix) {
  let counter = 0;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (c !== matrix[r].length - 1) {
        if (matrix[r][c] === matrix[r][c + 1]) {
          counter++;
        }
      }

      if (r !== matrix.length - 1) {
        if (matrix[r][c] === matrix[r + 1][c]) {
          counter++;
        }
      }
    }
  }

  return counter;
}

console.log(equalNeighbors(
  [['2', '3', '4', '7', '0'],
  ['4', '0', '5', '3', '4'],
  ['2', '3', '5', '4', '2'],
  ['9', '8', '7', '5', '4']]));
console.log(equalNeighbors(
  [['test', 'yes', 'yo', 'ho'],
  ['well', 'done', 'yo', '6'],
  ['not', 'done', 'yet', '5']]));