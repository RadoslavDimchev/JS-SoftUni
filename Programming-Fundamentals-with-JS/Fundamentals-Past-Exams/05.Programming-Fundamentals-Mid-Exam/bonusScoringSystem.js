function bonusScoringSystem(input) {
    input = input.map(Number);
    let students = input.shift();
    let lectures = input.shift();
    let additionalBonus = input.shift();

    let maxBonus = 0;
    let maxAttendance = 0;

    for (let i = 0; i < students; i++) {
        let attendance = input[i];
        let bonus = attendance / lectures * (5 + additionalBonus);

        if (bonus > maxBonus) {
            maxBonus = bonus;
            maxAttendance = attendance;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20']);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18']);