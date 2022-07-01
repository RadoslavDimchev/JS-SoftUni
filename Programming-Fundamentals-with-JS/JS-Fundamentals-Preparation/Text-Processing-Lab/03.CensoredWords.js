function censoredWords(text, word) {
    let tokens = text.split(word);

    console.log(tokens.join('*'.repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');