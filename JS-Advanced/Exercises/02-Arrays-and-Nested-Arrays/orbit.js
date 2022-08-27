function orbit([width, height, x, y]) {
  const matrix = new Array(height)
    .fill([])
    .map(() => new Array(width));

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
    }
  }

  matrix.forEach(arr => console.log(arr.join(' ')));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);