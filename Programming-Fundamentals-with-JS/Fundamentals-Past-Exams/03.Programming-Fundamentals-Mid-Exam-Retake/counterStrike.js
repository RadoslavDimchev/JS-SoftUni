function counterStrike(input) {
    let energy = Number(input.shift());
    let wins = 0;

    while (input[0] !== 'End of battle') {
        let distanceOfEnemy = Number(input.shift());

        if (energy >= distanceOfEnemy) {
            energy -= distanceOfEnemy;
            wins++;
        } else {
            return `Not enough energy! Game ends with ${wins} won battles and ${energy} energy`;
        }

        if (wins % 3 === 0) {
            energy += wins;
        }
    }

    return `Won battles: ${wins}. Energy left: ${energy}`;
}

console.log(counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]));
console.log(counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]));