function lettersChangeNumbers(text) {
    const strings = text
        .split(' ')
        .filter(el => el !== '');
    let result = 0;

    const getAlphaPosition = (letter) => letter.toUpperCase().charCodeAt() - 64;
    const isUpperCase = (letter) => letter.toUpperCase() === letter;

    for (const string of strings) {
        const firstLetter = string[0];
        const secondLetter = string[string.length - 1];
        let number = +string.slice(1, string.length - 1);

        const firstPosition = getAlphaPosition(firstLetter);
        const secondPosition = getAlphaPosition(secondLetter);

        if (isUpperCase(firstLetter)) {
            number /= firstPosition;
        } else {
            number *= firstPosition;
        }

        if (isUpperCase(secondLetter)) {
            number -= secondPosition;
        } else {
            number += secondPosition;
        }

        result += number;
    }

    console.log(result.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');