function schoolGrades(input) {
    let result = new Map();

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!result.has(name)) {
            result.set(name, []);
        }

        let existing = result.get(name);
        grades.forEach(x => existing.push(x));
    }

    let sorted = Array.from(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sorted) {
        let avgGrade = 0;
        grades.forEach(x => avgGrade += x);
        avgGrade /= grades.length;

        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);