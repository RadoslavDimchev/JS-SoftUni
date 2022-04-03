function trainTheTrainers(input) {

    let jury = Number(input[0]);
    let index = 1;
    let command = input[index];
    let presentationsCounter = 0;
    let sumAvgGrades = 0;

    while (command !== "Finish") {
        let presentationName = command;
        index++;
        presentationsCounter++;
        let sumGrades = 0;

        for (let i = 1; i <= jury; i++) {
            let grade = Number(input[index]);
            index++;
            sumGrades += grade;
        }
        let avgPresentationGrade = sumGrades / jury;
        sumAvgGrades += avgPresentationGrade;

        console.log(`${presentationName} - ${avgPresentationGrade.toFixed(2)}.`);

        command = input[index];
    }

    let avgGrade = sumAvgGrades / presentationsCounter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

}
trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);
