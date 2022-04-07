function tournamentOfChristmas(input) {

    let days = Number(input[0]);
    let index = 1;
    let command = input[index];

    let winDay = 0;
    let lossDay = 0;
    let money = 0;

    for (let i = 1; i <= days; i++) {
        let moneyForDay = 0;
        let win = 0;
        let loss = 0;

        while (command !== "Finish") {
            let sport = command;
            index++;
            let result = input[index];
            index++;
            if (result === "win") {
                moneyForDay += 20;
                win++;
            } else if (result === "lose") {
                loss++;
            }

            command = input[index];
        }
        if (win > loss) {
            winDay++;
            moneyForDay *= 1.10;
        } else {
            lossDay++;
        }
        money += moneyForDay;

        index++;
        command = input[index];
    }

    if (winDay > lossDay) {
        money *= 1.20;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }

}
tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);
tournamentOfChristmas(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"]);
