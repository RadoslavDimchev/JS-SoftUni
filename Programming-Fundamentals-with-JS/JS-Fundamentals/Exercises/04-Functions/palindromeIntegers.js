function palindromeIntegers(input) {
    for (const number of input) {
        let currentElement = number.toString();
        let reversedElement = currentElement.split('').reverse().join('');

        console.log(currentElement === reversedElement ? true : false);
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);