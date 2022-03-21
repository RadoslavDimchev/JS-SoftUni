function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let points = startingPoints;

    let inputLength = input.length;

    let wins = 0;

    for (let i = 2; i < inputLength; i++) {

        let currentStage = input[i];

        switch (currentStage) {

            case "W": points += 2000;
                wins++
                break;
            case "F": points += 1200; break;
            case "SF": points += 720; break;
        }
    }

    let averagePoints = (points - startingPoints) / tournaments;

    let pencentageWins = wins / tournaments * 100

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${pencentageWins.toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);