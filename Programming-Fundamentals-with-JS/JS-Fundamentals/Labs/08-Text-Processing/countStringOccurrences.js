function countStringOccurrences(text, word) {
    const occurrences = text
        .split(' ')
        .filter(el => el === word)
        .length;

    console.log(occurrences);
}

countStringOccurrences('This is a word and it also is a sentence',
    'is') //  2

countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni') // 1