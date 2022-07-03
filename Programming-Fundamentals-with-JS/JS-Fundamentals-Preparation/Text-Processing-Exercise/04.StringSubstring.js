function stringSubstring(searchedWord, text) {
    let words = text.split(' ');
    let searchedWordLowerCase = searchedWord.toLocaleLowerCase();

    for (const word of words) {
        let wordLowerCase = word.toLocaleLowerCase();

        if (wordLowerCase === searchedWordLowerCase) {
            console.log(searchedWord);
            return;
        }
    }

    console.log(`${searchedWord} not found!`);
}

stringSubstring('javascript',
    'JavaScript is the best programming language');
stringSubstring('python',
    'JavaScript is the best programming language');