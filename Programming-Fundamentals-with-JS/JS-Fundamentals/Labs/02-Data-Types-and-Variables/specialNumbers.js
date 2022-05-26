function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let numToString = String(i);
        let sum = 0;

        for (let j = 0; j < numToString.length; j++) {
            let currentNumber = Number(numToString[j]);
            sum += currentNumber;
        }

        let isSpecial = false;

        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
        }

        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}

specialNumbers(15);
specialNumbers(20);