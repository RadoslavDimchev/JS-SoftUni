function equalPairs(input) {

    let n = Number(input[0]);
    let index = 1

    let lastPair = 0;
    let maxDiff = 0;

    for (let i = 1; i <= n; i++) {
        let num1 = Number(input[index]);
        index++;
        let num2 = Number(input[index]);
        index++;
        let currentPair = num1 + num2;

        if (i > 1) {
            let diff = Math.abs(currentPair - lastPair);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
        lastPair = currentPair;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${lastPair}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }

}
equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPairs(["2", "-1", "0", "0", "-1"]);
equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["1", "5", "5"]);
equalPairs(["2", "-1", "2", "0", "-1"]);
