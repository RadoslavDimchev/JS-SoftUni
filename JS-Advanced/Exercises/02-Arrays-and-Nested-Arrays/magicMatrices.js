function magicMatrices(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    const sumRowOne = matrix[i].reduce((a, b) => a + b, 0);
    const sumRowTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
    let sumColOne = 0;
    let sumColTwo = 0;

    for (let j = 0; j < matrix.length; j++) {
      sumColOne += matrix[i][j];
      sumColTwo += matrix[i + 1][j];
    }

    if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
      return false;
    }
  }

  return true;
}

console.log(magicMatrices(
  [[4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]]));
console.log(magicMatrices(
  [[11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]]));
console.log(magicMatrices(
  [[1, 0, 0],
  [0, 0, 1],
  [0, 1, 0]]));