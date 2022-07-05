function hardWord(input) {
    let letter = input[0];
    let unknownWords = input[1];

    unknownWords.sort((a, b) => b.length - a.length);

    for (let word of unknownWords) {
        letter = letter.replace('_'.repeat(word.length), word);
    }

    console.log(letter);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);

// second solution

/* function hardWord(input) {
    let letter = input[0];
    let unknownWords = input[1];

    let letterLength = letter.length;
    let underscoreLength = 0;

    for (let i = 0; i < letterLength; i++) {
        let currChar = letter[i];

        if (currChar === '_') {
            letter = letter.substring(0, i) + letter.substring(i + 1);
            underscoreLength++;
            i--;
        } else {
            if (underscoreLength > 0) {
                for (let char of unknownWords) {
                    if (char.length === underscoreLength) {
                        let index = unknownWords.indexOf(char);
                        let word = unknownWords.splice(index, 1)[0];

                        letter = letter.substring(0, i) + word + letter.substring(i);
                        underscoreLength = 0;
                        break;
                    }
                }

            }
        }
    }

    console.log(letter);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]); */