function easterEggsBattle(input) {

    let index = 0;
    let firstPlayer = Number(input[index++]);
    let secondPlayer = Number(input[index++]);
    let command = input[index];

    while (command !== "End") {
        let winner = command;

        if (winner === "one") {
            --secondPlayer;
        } else if (winner === "two") {
            --firstPlayer;
        }

        if (firstPlayer === 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayer} eggs left.`);
            break;
        } else if (secondPlayer === 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayer} eggs left.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "End") {
        console.log(`Player one has ${firstPlayer} eggs left.`);
        console.log(`Player two has ${secondPlayer} eggs left.`);
    }

}
easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End"]);
easterEggsBattle(["2", "6", "one", "two", "two"]);
