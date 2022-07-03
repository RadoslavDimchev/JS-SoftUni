function revealWords(wordsAsString, template) {
    let words = wordsAsString.split(', ');

    for (const word of words) {
        let asterisks = '*'.repeat(word.length);
        template = template.replace(asterisks, word);
    }

    console.log(template);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');