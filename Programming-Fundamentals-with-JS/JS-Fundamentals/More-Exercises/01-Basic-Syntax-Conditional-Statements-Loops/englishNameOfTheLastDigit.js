function englishNameOfTheLastDigit(number) {
    let lastDigit = Math.abs(number % 10);
    switch (lastDigit) {
        case 0: lastDigitName = 'zero'; break;
        case 1: lastDigitName = 'one'; break;
        case 2: lastDigitName = 'two'; break;
        case 3: lastDigitName = 'three'; break;
        case 4: lastDigitName = 'four'; break;
        case 5: lastDigitName = 'five'; break;
        case 6: lastDigitName = 'six'; break;
        case 7: lastDigitName = 'seven'; break;
        case 8: lastDigitName = 'eight'; break;
        case 9: lastDigitName = 'nine'; break;
    }

    console.log(lastDigitName);
}

englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);