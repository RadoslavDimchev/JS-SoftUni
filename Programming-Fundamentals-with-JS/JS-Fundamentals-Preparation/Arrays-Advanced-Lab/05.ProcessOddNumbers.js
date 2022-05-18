function processOddNumbers(arrayOfNumbers) {
    let filtered = arrayOfNumbers.filter((x, i) => i % 2 !== 0);
    let doubled = filtered.map(x => x * 2);
    let reversed = doubled.reverse();

    console.log(reversed.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);