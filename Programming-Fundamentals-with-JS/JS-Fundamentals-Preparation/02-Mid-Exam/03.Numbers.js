function numbers(integersInString) {
    let integers = integersInString.split(' ').map(Number);
    let averageValue = 0;

    for (let integer of integers) {
        averageValue += integer;
    }
    averageValue /= integers.length;

    let greaterNumbers = [];

    for (let currInteger of integers) {
        if (currInteger > averageValue) {
            greaterNumbers.push(currInteger);
        }
    }

    greaterNumbers.sort((a, b) => b - a);

    while (greaterNumbers.length > 5) {
        greaterNumbers.pop();
    }

    if (greaterNumbers.length === 0) {
        console.log('No');
    } else {
        console.log(greaterNumbers.join(' '));
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');