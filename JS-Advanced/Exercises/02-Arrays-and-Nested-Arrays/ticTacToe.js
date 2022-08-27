function ticTacToe(moves) {
  const length = 3;
  let player = 'X';

  let dashboard = new Array(length)
    .fill([])
    .map(() => new Array(length).fill(false));

  while (moves.length) {
    const [row, col] = getCoordinates(moves);

    dashboard = setPoint(dashboard, row, col, player);

    if (isWinner(dashboard, player, length)) {
      console.log(`Player ${player} wins!`);
      break;
    }

    if (!hasFreeSpaces(dashboard)) {
      console.log('The game ended! Nobody wins :(');
      break;
    };

    player = player === 'X' ? 'O' : 'X';
  }

  dashboard.forEach(row => console.log(row.join('\t')));

  function setPoint(dashboard, row, col, player) {
    if (dashboard[row][col] === false) {
      dashboard[row][col] = player;
    } else {
      console.log('This place is already taken. Please choose another!');
      [row, col] = getCoordinates(moves);
      setPoint(dashboard, row, col, player);
    }

    return dashboard;
  }

  function isWinner(dashboard, player, length) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < length; i++) {
      // check rows
      if (dashboard[i].every(value => value === player)) {
        return true;
      };

      // check cols
      if (dashboard[0][i] === player && dashboard[1][i] === player && dashboard[2][i] === player) {
        return true;
      }

      if (dashboard[i][i] === player) {
        mainDiagonal++;
      }

      if (dashboard[i][length - 1 - i] === player) {
        secondaryDiagonal++;
      }
    }

    // check diagonals
    if (mainDiagonal === 3 || secondaryDiagonal === 3) {
      return true;
    }

    return false;
  }

  function getCoordinates(moves) {
    return moves
      .shift()
      .split(' ')
      .map(Number);
  }

  function hasFreeSpaces(dashboard) {
    return dashboard
      .some(row => row.some(value => !value));
  }
}

ticTacToe(["0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0"]);
ticTacToe(["0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1"]);
ticTacToe(["0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0"]);