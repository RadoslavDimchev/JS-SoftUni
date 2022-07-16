function stringSubstring(word = '', text = '') {
    const wordLower = word.toLowerCase();
    const wordsFromText = text
        .split(' ')
        .map(word => word.toLowerCase());

    if (wordsFromText.includes(wordLower)) {
        console.log(wordLower);
    } else {
        console.log(`${wordLower} not found!`);
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language');
stringSubstring('python',
    'JavaScript is the best programming language');