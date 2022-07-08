function schoolGrades(input) {
    const students = new Map();

    for (const info of input) {
        const tokens = info.split(' ');
        const student = tokens.shift();
        const currGrades = tokens.map(Number);

        if (!students.has(student)) {
            students.set(student, []);
        }

        const oldGrades = students.get(student);
        const grades = currGrades.concat(oldGrades);

        students.set(student, grades);
    }

    Array
        .from(students)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([student, grades]) => {
            const averageGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
            console.log(`${student}: ${averageGrade.toFixed(2)}`);
        });
}

// second solution with object

/* function schoolGrades(input) {
    const students = {};

    for (const info of input) {
        const tokens = info.split(' ');
        const name = tokens.shift();
        let grades = tokens.map(Number);

        if (students.hasOwnProperty(name)) {
            const oldGrades = students[name];
            grades = grades.concat(oldGrades);
        }

        students[name] = grades;
    }

    const sortedStudents = Object
        .entries(students)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [student, grades] of sortedStudents) {
        let averageGrade = 0;
        grades.forEach(grade => averageGrade += grade);
        averageGrade /= grades.length;

        console.log(`${student}: ${averageGrade.toFixed(2)}`);
    }
} */

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);