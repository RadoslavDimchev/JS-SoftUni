function revealWords(words = '', template = '') {
    const wordsToReveal = words.split(', ');
    const templateArr = template.split(' ');

    for (const word of wordsToReveal) {
        for (const element of templateArr) {
            if (element.includes('*') && element.length === word.length) {
                template = template.replace(element, word);
            }
        }
    }

    console.log(template);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');