function smallestTwoNumbers(array) {
    let numbers = array.sort((a, b) => a - b);
    let twoNumbers = numbers.slice(0, 2);
    console.log(twoNumbers.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);