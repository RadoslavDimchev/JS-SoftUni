function numbers(input) {
    let arrOfIntegers = input
        .split(' ')
        .map(Number);

    let sum = 0;
    arrOfIntegers.forEach(x => sum += x);
    let averageValue = sum / arrOfIntegers.length;

    arrOfIntegers = arrOfIntegers
        .filter(x => x > averageValue)
        .sort((a, b) => b - a)
        .splice(0, 5);

    return arrOfIntegers.length > 0 ? arrOfIntegers.join(' ') : 'No';
}

console.log(numbers('10 20 30 40 50'));
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
console.log(numbers('1'));
console.log(numbers('-1 -2 -3 -4 -5 -6'));