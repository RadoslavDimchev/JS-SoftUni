function sumOfOddNumbers(n) {
    let correctN = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i += 2) {
        correctN++;
        sum += i;
        console.log(i);
        if (correctN === n)
            break;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);