function smallestTwoNumbers(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    let smalllestNumbers = sortedNumbers.slice(0, 2);

    console.log(smalllestNumbers.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);