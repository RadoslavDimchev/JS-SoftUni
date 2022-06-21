function bunnyKill(array) {
  let coordinates = array
    .pop()
    .split(' ')
    .map(x => x.split(',').map(Number));

  let matrix = array.map(el => el.split(' ').map(Number));

  let snowballDamage = 0;
  let killedBunniesBySnowball = 0;

  dealsDamageFromBombs(coordinates);
  sumDamageAndKilledBunnies();

  console.log(snowballDamage);
  console.log(killedBunniesBySnowball);

  function dealsDamageFromBombs(coordinates) {
    for (let coordinate of coordinates) {
      let [bombRow, bombCol] = coordinate;
      let bunnyBombValue = matrix[bombRow][bombCol];

      if (bunnyBombValue > 0) {
        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(bombRow + 1, matrix.length - 1);

        for (let row = startRow; row <= endRow; row++) {
          let startCol = Math.max(0, bombCol - 1);
          let endCol = Math.min(bombCol + 1, matrix[row].length - 1);

          for (let col = startCol; col <= endCol; col++) {
            matrix[row][col] -= bunnyBombValue;

            if (row === bombRow && col === bombCol) {
              snowballDamage += bunnyBombValue;
              killedBunniesBySnowball++;
            }

            if (matrix[row][col] < 0) {
              matrix[row][col] = 0;
            }
          }
        }
      }
    }
  }

  function sumDamageAndKilledBunnies() {

    for (let i = 0; i < matrix.length; i++) {
      for (let currBunnyValue of matrix[i]) {

        if (currBunnyValue > 0) {
          snowballDamage += currBunnyValue;
          killedBunniesBySnowball++;
        }
      }
    }
  }
}

bunnyKill([
  "5 10 15 20",
  "10 10 10 10",
  "10 15 10 10",
  "10 10 10 10",
  "2,2 0,1",]);
bunnyKill(["10 10 10",
  "10 10 10",
  "10 10 10",
  "0,0"]);