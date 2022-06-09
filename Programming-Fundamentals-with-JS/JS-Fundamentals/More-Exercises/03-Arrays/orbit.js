function orbit(arr) {
    let [width, height, x, y] = arr.map(Number);

    let matrix = [];

    for (let i = 0; i < width; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);