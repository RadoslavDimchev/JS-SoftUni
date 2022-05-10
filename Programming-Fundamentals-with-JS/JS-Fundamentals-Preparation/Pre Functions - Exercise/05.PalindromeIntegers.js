function palindromeIntegers(arrayOfIntegers) {

    function isPalindrome(number) {
        let integer = number;
        let reversedInteger = Number(number.toString().split('').reverse().join(''));
        if (integer === reversedInteger) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < arrayOfIntegers.length; i++) {
        let currInteger = arrayOfIntegers[i];
        console.log(isPalindrome(currInteger));
    }
}

palindromeIntegers([123, 323, 421, 121]); 