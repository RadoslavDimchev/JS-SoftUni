function examPreparation(input) {

    let poorGradesNumber = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let poorGrades = 0;
    let sumGrades = 0;
    let taskCount = 0;
    let lastTask = "";
    let averageGrade = 0;

    while (command !== "Enough") {
        let grade = Number(input[index]);
        index++;

        sumGrades += grade;

        if (grade <= 4.00) {
            poorGrades++;

            if (poorGrades >= poorGradesNumber) {
                console.log(`You need a break, ${poorGrades} poor grades.`);
                break;
            }
        }

        taskCount++;
        lastTask = command;

        command = input[index];
        index++;
    }

    if (command === "Enough") {
        averageGrade = sumGrades / taskCount

        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${taskCount}`);
        console.log(`Last problem: ${lastTask}`);
    }

}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
