function sequences(input) {
    let numbers = input
        .map(JSON.parse)
        .map(arr => arr.sort((a, b) => b - a))
        .map(JSON.stringify);

    Array
        .from(new Set(numbers))
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}

// second solution

/* function sequences(input) {
    let unique = [];

    for (let el of input) {
        let sortedNumbers = JSON.parse(el)
            .sort((a, b) => b - a);

        let jsonNumbers = JSON.stringify(sortedNumbers);

        if (!unique.includes(jsonNumbers)) {
            unique.push(jsonNumbers);
        }
    }

    unique
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(numbers => console.log(`[${numbers.join(', ')}]`));
} */

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);