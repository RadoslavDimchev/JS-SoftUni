function primePairs(input) {

    let firstStart = Number(input[0]);
    let secondStart = Number(input[1]);
    let firstDiff = Number(input[2]);
    let secondDiff = Number(input[3]);

    let firstEnd = firstStart + firstDiff;
    let secondEnd = secondStart + secondDiff;

    for (let i = firstStart; i <= firstEnd; i++) {
        for (let j = secondStart; j <= secondEnd; j++) {
            let flag = 0;
            for (let k = 2; k < i; k++) {
                if (i % k === 0) {
                    flag = 1;
                    break;
                }
            }
            for (let l = 2; l < j; l++) {
                if (j % l === 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && j > 1 && flag === 0) {
                console.log(`${i}${j}`);
            }
        }
    }

}
primePairs(["10", "20", "5", "5"]);
primePairs(["10", "30", "9", "6"]);
