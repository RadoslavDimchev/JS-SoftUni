function shootForTheWin(input) {
    let integers = input
        .shift()
        .split(' ')
        .map(Number);

    let shots = 0;

    while (input[0] !== 'End') {
        let index = Number(input.shift());
        let currentTarget = integers[index];

        if (currentTarget !== -1 && (index >= 0 && index < integers.length)) {
            integers[index] = -1;
            shots++;

            for (let i = 0; i < integers.length; i++) {
                let target = integers[i];

                if (target !== -1) {
                    if (target > currentTarget) {
                        target -= currentTarget;
                    } else if (target <= currentTarget) {
                        target += currentTarget;
                    }
                }

                integers[i] = target;
            }
        }
    }

    console.log(`Shot targets: ${shots} -> ${integers.join(' ')}`);
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);