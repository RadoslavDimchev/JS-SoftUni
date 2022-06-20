function blackFlag(array) {
    let plunderDays = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= plunderDays; i++) {
        let currentPlunder = dailyPlunder;

        if (i % 3 === 0) {
            currentPlunder *= 1.5;
        }

        totalPlunder += currentPlunder;

        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);