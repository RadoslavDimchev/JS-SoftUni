function easterCompetition(input) {

    let index = 0;
    let easterCakes = Number(input[index]);
    index++;
    let bestGrades = 0;
    let bestBaker = "";

    for (let i = 1; i <= easterCakes; i++) {
        let bekar = input[index];
        index++;
        let command = input[index];
        let sumGrades = 0;

        while (command !== "Stop") {
            let grade = Number(command);
            index++;
            sumGrades += grade;

            command = input[index];
        }
        console.log(`${bekar} has ${sumGrades} points.`);

        if (sumGrades > bestGrades) {
            bestGrades = sumGrades;
            bestBaker = bekar;
            console.log(`${bestBaker} is the new number 1!`);
        }
        index++;
        command = input[index];
    }
    console.log(`${bestBaker} won competition with ${bestGrades} points!`);

}
easterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"]);
easterCompetition(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);
