function theSongOfTheWheels(input) {

    let controlValue = Number(input[0]);

    let numbers = "";
    let isFound = false;
    let numbersCounter = 0;
    let password = "";
    let flag = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a * b + c * d === controlValue) {
                        if (a < b && c > d) {
                            numbers += `${a}${b}${c}${d} `;
                            isFound = true;
                            numbersCounter++;
                            if (numbersCounter === 4) {
                                password = `${a}${b}${c}${d}`;
                                flag = true;
                            }
                        } else {
                            continue;
                        }
                    }
                }
            }
        }
    }
    if (isFound) {
        console.log(numbers);
        if (flag) {
            console.log(`Password: ${password}`);
        } else {
            console.log(`No!`);
        }
    } else {
        console.log(`No!`);
    }

}
theSongOfTheWheels(["11"]);
theSongOfTheWheels(["139"]);
theSongOfTheWheels(["110"]);
theSongOfTheWheels(["55"]);
