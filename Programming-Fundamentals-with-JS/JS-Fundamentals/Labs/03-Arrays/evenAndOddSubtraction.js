function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let number of arr) {
        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    let difference = evenSum - oddSum;
    console.log(difference);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);