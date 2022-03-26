function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let classNumber = 1;

    let badGrade = 0;
    let sumGrades = 0;

    let isExcluded = false;

    while (classNumber <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGrade++

            if (badGrade > 1) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${classNumber} grade`);
                break;
            }
            continue;
        }
        sumGrades += grade;
        classNumber++;

    }
    if (!isExcluded) {
        let averageGrade = sumGrades / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
