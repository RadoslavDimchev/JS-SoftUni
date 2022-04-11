function footballResults(input) {

    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input[2];

    let wins = 0;
    let draws = 0;
    let losses = 0;

    if (firstMatch[0] > firstMatch[2]) {
        wins++;
    } else if (firstMatch[0] === firstMatch[2]) {
        draws++;
    } else if (firstMatch[0] < firstMatch[2]) {
        losses++;
    }

    if (secondMatch[0] > secondMatch[2]) {
        wins++;
    } else if (secondMatch[0] === secondMatch[2]) {
        draws++;
    } else if (secondMatch[0] < secondMatch[2]) {
        losses++;
    }

    if (thirdMatch[0] > thirdMatch[2]) {
        wins++;
    } else if (thirdMatch[0] === thirdMatch[2]) {
        draws++;
    } else if (thirdMatch[0] < thirdMatch[2]) {
        losses++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);

}
footballResults(["3:1", "0:2", "0:0"]);
footballResults(["4:2", "0:3", "1:0"]);
footballResults(["0:2", "0:1", "3:3"]);
