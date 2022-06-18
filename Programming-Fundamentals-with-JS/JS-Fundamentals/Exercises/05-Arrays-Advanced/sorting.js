function sorting(numbers) {
    let result = [];
    numbers.sort((a, b) => b - a);

    while (numbers.length > 0) {
        let biggestNumber = numbers.shift();
        result.push(biggestNumber);

        let smallestNumber = numbers.pop();
        result.push(smallestNumber);
    }

    console.log(result.join(' '));
}

/* Second solution

function sorting(numbers) {
    let sortedNumbers = [];
    let numbersLength = numbers.slice().length;

    for (let i = 0; i < numbersLength; i++) {
        let currentNumber;

        if (i % 2 === 0) {
            currentNumber = Math.max(...numbers);
        } else {
            currentNumber = Math.min(...numbers);
        }

        sortedNumbers.push(currentNumber);
        let index = numbers.indexOf(currentNumber);
        numbers.splice(index, 1);
    }

    console.log(sortedNumbers.join(' '));
} */

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);