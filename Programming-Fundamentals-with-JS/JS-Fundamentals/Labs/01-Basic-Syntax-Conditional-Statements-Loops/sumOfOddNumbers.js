function sumOfOddNumbers(n) {
    let currN = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i += 2) {
        currN++;
        console.log(i);
        sum += i;
        if (currN === n) {
            break;
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);