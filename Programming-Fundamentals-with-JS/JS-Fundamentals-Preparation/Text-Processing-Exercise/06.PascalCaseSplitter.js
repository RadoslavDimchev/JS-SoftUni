function pascalCaseSplitter(text) {
    let words = [];
    let word = text[0];

    for (let i = 1; i < text.length; i++) {
        let currentChar = text[i];
        let upperCaseChar = currentChar.toLocaleUpperCase();

        if (currentChar === upperCaseChar) {
            words.push(word);
            word = '';
        }

        word += currentChar;
    }

    words.push(word);
    console.log(words.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');