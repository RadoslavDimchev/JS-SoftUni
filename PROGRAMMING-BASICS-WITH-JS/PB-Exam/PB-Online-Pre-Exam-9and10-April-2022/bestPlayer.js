function bestPlayer(input) {

    let index = 0;
    let command = input[index];

    let maxGoals = 0;
    let maxPlayer = "";
    let hatTrick = false;

    while (command !== "END") {
        let name = command;
        index++;
        let goals = Number(input[index]);
        index++;

        if (goals > maxGoals) {
            maxPlayer = name;
            maxGoals = goals;
        }

        if (maxGoals >= 3) {
            hatTrick = true;

            if (maxGoals >= 10) {
                break;
            }
        }

        command = input[index];
    }

    console.log(`${maxPlayer} is the best player!`);

    if (hatTrick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }

}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
