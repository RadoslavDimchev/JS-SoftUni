function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let inputL = input.length;
    let wins = 0;
    let points = 0;

    for (let i = 2; i < inputL; i++) {
        let stage = input[i];

        if (stage === "W") {
            wins++;
            points += 2000;
        } else if (stage === "F") {
            points += 1200;
        } else if (stage === "SF") {
            points += 720;
        }
    }
    let totalPoints = startPoints + points;
    let avgPoints = points / tournaments;
    let percentWins = wins / tournaments * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${percentWins.toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
