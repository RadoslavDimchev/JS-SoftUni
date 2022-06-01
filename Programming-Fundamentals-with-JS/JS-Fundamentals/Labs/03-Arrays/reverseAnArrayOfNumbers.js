function reverseAnArrayOfNumbers(number, arr) {
    let result = [];

    for (let i = number - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);