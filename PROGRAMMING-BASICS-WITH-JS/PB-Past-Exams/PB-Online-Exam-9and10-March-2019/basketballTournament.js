function basketballTournament(input) {

    let index = 0;
    let command = input[index];

    let sumMathes = 0;
    let wins = 0;
    let losts = 0;

    while (command !== "End of tournaments") {
        let tournamentName = command;
        index++;
        let matches = Number(input[index]);
        index++;

        for (let i = 1; i <= matches; i++) {
            let points = Number(input[index]);
            index++;
            let enemyPoints = Number(input[index]);
            index++;
            sumMathes++;

            if (points > enemyPoints) {
                wins++;
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${points - enemyPoints} points.`);
            } else {
                losts++;
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${enemyPoints - points} points.`);
            }
        }
        command = input[index];
    }
    let winsPercent = wins / sumMathes * 100;
    let lostsPercent = losts / sumMathes * 100;

    console.log(`${winsPercent.toFixed(2)}% matches win`);
    console.log(`${lostsPercent.toFixed(2)}% matches lost`);

}
basketballTournament(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
basketballTournament(["Ballers", "3", "87", "63", "56", "65", "75", "64", "Sharks", "4", "64", "76", "65", "86", "68", "99", "45", "78", "End of tournaments"]);
