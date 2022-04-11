function bestPlayer(input) {

    let index = 0;
    let command = input[index];

    let bestPlayer = "";
    let bestPGoals = 0;
    let hatTrick = false;

    while (command !== "END") {

        let name = command;
        index++;
        let goals = Number(input[index]);

        if (goals > 0) {

            if (goals > bestPGoals) {
                bestPlayer = name;
                bestPGoals = goals;
            }
        }

        if (bestPGoals >= 3) {
            hatTrick = true;
        }

        if (bestPGoals >= 10) {
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "END" || bestPGoals >= 10) {
        console.log(`${bestPlayer} is the best player!`);

        if (hatTrick === true) {
            console.log(`He has scored ${bestPGoals} goals and made a hat-trick !!!`);
        } else {
            console.log(`He has scored ${bestPGoals} goals.`);
        }

    }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
