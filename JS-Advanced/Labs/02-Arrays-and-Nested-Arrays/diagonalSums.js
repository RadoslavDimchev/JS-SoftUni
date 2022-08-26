function diagonalSums(matrix) {
  let [mainSum, secondarySum] = [0, 0];

  for (let i = 0; i < matrix.length; i++) {
    mainSum += matrix[i][i];
    secondarySum += matrix[i][matrix[0].length - 1 - i];
  }

  console.log(mainSum, secondarySum);
}

diagonalSums(
  [[20, 40],
  [10, 60]]);
diagonalSums(
  [[3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89]]);