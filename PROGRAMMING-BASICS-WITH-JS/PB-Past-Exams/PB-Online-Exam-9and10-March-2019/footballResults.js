function footballResults(input) {

    let wins = 0;
    let draws = 0;
    let losts = 0;

    for (let i = 0; i < 3; i++) {

        let host = input[i].charAt(0);
        let guest = input[i].charAt(2);

        if (host > guest) {
            wins++;
        } else if (host < guest) {
            losts++;
        } else if (host = guest) {
            draws++;
        }
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losts} games.`);
    console.log(`Drawn games: ${draws}`);

}
footballResults(["3:1", "0:2", "0:0"]);
footballResults(["4:2", "0:3", "1:0"]);
footballResults(["0:2", "0:1", "3:3"]);