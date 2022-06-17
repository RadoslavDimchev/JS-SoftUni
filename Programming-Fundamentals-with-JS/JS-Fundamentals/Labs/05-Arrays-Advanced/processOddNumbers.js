function processOddNumbers(numbers) {
    let filteredNumbers = numbers.filter((x, i) => i % 2 === 1);
    let doubledNumbers = filteredNumbers.map(x => x * 2);
    let reversedNumbers = doubledNumbers.reverse();

    console.log(reversedNumbers.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);

/*     second solution - short

let num = numbers => numbers.filter((x, i) => i % 2 === 1)
    .map(x => x * 2)
    .reverse()
    .join(' ');

console.log(num([10, 15, 20, 25])); */