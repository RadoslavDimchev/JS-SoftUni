function triplesOfLatinLetters(numberAsString) {
    let number = Number(numberAsString);

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            for (let k = 0; k < number; k++) {
                let firstLetter = String.fromCharCode(97 + i);
                let secondLetter = String.fromCharCode(97 + j);
                let thirdLetter = String.fromCharCode(97 + k);

                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
    }
}

triplesOfLatinLetters('3');
triplesOfLatinLetters('2');