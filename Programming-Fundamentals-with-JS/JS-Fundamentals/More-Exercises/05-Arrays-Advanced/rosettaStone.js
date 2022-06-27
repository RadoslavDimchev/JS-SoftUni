function rosettaStone(input) {
  let decodingLength = Number(input.shift());
  let decodingMatrix = input
    .splice(0, decodingLength)
    .map((el) => el.split(' ').map(Number));

  let encodedMatrix = input
    .map(el => el.split(' ').map(Number));
  let encodedMatrixLength = encodedMatrix.length;

  for (let r = 0; r < encodedMatrixLength; r++) {
    for (let c = 0; c < encodedMatrix[r].length; c++) {
      encodedMatrix[r][c] += decodingMatrix[r % decodingLength][c % decodingMatrix[0].length];
      encodedMatrix[r][c] %= 27;

      if (encodedMatrix[r][c] === 0) {
        encodedMatrix[r][c] = ' ';
      } else {
        encodedMatrix[r][c] = String.fromCharCode(encodedMatrix[r][c] + 64);
      }
    }
  }

  let finalMessage = '';
  encodedMatrix.forEach(row => finalMessage += row.join(''));

  console.log(finalMessage);
}

rosettaStone(['1',
  '1 3 13',
  '12 22 14 13 25 0 4 24 23',
  '18 24 2 25 22 0 0 11 18',
  '8 25 6 26 8 23 13 4 14',
  '14 3 14 10 6 1 6 16 14',
  '11 12 2 10 24 2 13 24 0']);
rosettaStone(['2',
  '59 36',
  '82 52',
  '4 18 25 19 8',
  '4 2 8 2 18',
  '23 14 22 0 22',
  '2 17 13 19 20',
  '0 9 0 22 22']);
rosettaStone(['2',
  '31 32',
  '74 37',
  '19 0 23 25',
  '22 3 12 17',
  '5 9 23 11',
  '12 18 10 22']);