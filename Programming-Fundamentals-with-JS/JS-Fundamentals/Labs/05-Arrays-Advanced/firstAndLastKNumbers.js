function firstAndLastKNumbers(arr) {
    let k = arr.shift();

    let firstKNumbers = arr.slice(0, k);
    let lastKNumbers = arr.slice(-k);

    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);