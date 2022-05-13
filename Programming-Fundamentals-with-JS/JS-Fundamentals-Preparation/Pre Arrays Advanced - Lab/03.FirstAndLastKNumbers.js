function firstAndLastKNumbers(numbers) {
    let k = numbers.shift();

    let firstKElements = numbers.slice(0, k);
    let lastKElements = numbers.slice(-k);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);