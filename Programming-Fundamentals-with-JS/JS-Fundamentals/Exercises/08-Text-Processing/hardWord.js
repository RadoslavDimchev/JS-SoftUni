function hardWord(input = []) {
    let letter = input[0];
    const words = input[1]
        .sort((a, b) => b.length - a.length);

    for (const word of words) {
        letter = letter.replace('_'.repeat(word.length), word);
    }

    console.log(letter);
}


// second solution from lection

/* function hardWord(input = []) {
    let letter = input[0];
    let words = input[1];
    let underscores = [];

    for (let word of words) {
        let underscore = '_'.repeat(word.length);
        underscores.push(underscore);
    }

    words.sort((a, b) => b.length - a.length);
    underscores.sort((a, b) => b.length - a.length);

    for (let i = 0; i < underscores.length; i++) {
        letter = letter.replace(underscores[i], words[i]);
    }

    console.log(letter);
} */


// third solution with RegExp

/* function hardWord(input = []) {
    let letter = input[0];
    const words = input[1];

    const pattern = /_+/g;
    let match = pattern.exec(letter);

    while (match) {
        let word = words
            .filter(word => word.length === match[0].length)[0];

        letter = letter
            .replace(match, word);

        match = pattern.exec(letter);
    }

    console.log(letter);
} */

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);