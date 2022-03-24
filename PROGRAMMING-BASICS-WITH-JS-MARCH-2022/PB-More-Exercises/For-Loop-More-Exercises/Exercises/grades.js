function grades(input) {

    let studentsOnExam = Number(input[0]);
    let grade = 0;

    let topStudents = 0;
    let between4And499 = 0;
    let between3And399 = 0;
    let fail = 0;

    let averageGrade = 0;

    for (let i = 1; i <= studentsOnExam; i++) {

        grade = Number(input[i]);

        if (grade >= 5.00) {
            topStudents++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            between4And499++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            between3And399++;
        } else if (grade >= 2.00 && grade <= 2.99) {
            fail++;
        }

        averageGrade += grade;
    }

    let pTopStudents = topStudents / studentsOnExam * 100;
    let pBetween4And499 = between4And499 / studentsOnExam * 100;
    let pBetween3And399 = between3And399 / studentsOnExam * 100;
    let pFail = fail / studentsOnExam * 100;

    averageGrade /= studentsOnExam;

    console.log(`Top students: ${pTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${pBetween4And499.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${pBetween3And399.toFixed(2)}%`);
    console.log(`Fail: ${pFail.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);
