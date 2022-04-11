function footballTournament(input) {

    let teamName = input[0];
    let playedMatches = Number(input[1]);

    let inputL = input.length;
    let wCounter = 0;
    let dCounter = 0;
    let lCounter = 0;
    let points = 0;

    if (playedMatches === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else {

        for (let i = 2; i < inputL; i++) {
            let result = input[i];
            switch (result) {
                case "W":
                    wCounter++;
                    points += 3;
                    break;
                case "D":
                    dCounter++;
                    points += 1;
                    break;
                case "L":
                    lCounter++;
                    break;
            }
        }

        console.log(`${teamName} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wCounter}`);
        console.log(`## D: ${dCounter}`);
        console.log(`## L: ${lCounter}`);
        console.log(`Win rate: ${(wCounter / playedMatches * 100).toFixed(2)}%`);
    }

}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
footballTournament(["Chelsea", "0"]);
