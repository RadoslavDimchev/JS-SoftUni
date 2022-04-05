function secretDoorsLock(input) {

    let firstMax = Number(input[0]);
    let secondMax = Number(input[1]);
    let thirdMax = Number(input[2]);

    let primeNum = false;

    for (let i = 1; i <= firstMax; i++) {
        if (i % 2 === 0) {
        } else {
            continue;
        }
        for (let j = 2; j <= secondMax; j++) {
            let flag = 0;
            for (let k = 2; k < j; k++) {
                if (j % k === 0) {
                    flag = 1;
                    primeNum = false;
                }
            }
            if (j > 1 && flag === 0) {
                primeNum = true;
            }
            for (let l = 1; l <= thirdMax; l++) {
                if (l % 2 === 0) {
                } else {
                    continue;
                }
                if (primeNum) {
                    console.log(`${i} ${j} ${l} `);
                }
            }
        }
    }

}
secretDoorsLock(["3", "5", "5"]);
secretDoorsLock(["8", "2", "8"]);
