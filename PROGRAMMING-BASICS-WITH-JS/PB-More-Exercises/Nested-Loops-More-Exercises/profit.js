function profit(input) {

    let coins1 = Number(input[0]);
    let coins2 = Number(input[1]);
    let coins5 = Number(input[2]);
    let amount = Number(input[3]);

    for (let i = 0; i <= coins1; i++) {
        for (let j = 0; j <= coins2; j++) {
            for (let k = 0; k <= coins5; k++) {
                if (i * 1 + j * 2 + k * 5 === amount) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${amount} lv.`);
                }
            }
        }
    }

}
profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);
