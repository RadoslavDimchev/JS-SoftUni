function nameGame(input) {

    let index = 0;
    let command = input[index];
    let maxPoints = 0;
    let winner = "";

    while (command !== "Stop") {
        let name = input[index];
        index++;
        let n = Number(input[index]);
        let points = 0;
        let nameLength = name.length;

        for (let i = 0; i < nameLength; i++) {
            index++;
            if (name[i] === String.fromCharCode(n)) {
                points += 10;
            } else {
                points += 2;
            }
            n = Number(input[index]);
        }
        if (points >= maxPoints) {
            maxPoints = points;
            winner = name;
        }

        command = input[index];
    }
    console.log(`The winner is ${winner} with ${maxPoints} points!`);

}
nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);
