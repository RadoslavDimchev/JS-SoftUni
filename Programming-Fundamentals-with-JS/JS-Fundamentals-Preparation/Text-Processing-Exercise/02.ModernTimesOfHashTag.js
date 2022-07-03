function modernTimesOfHashTag(sentence) {
    let words = sentence.split(' ');

    for (const word of words) {
        let isValidWord = true;

        if (word.startsWith('#') && word.length > 1) {
            let wordWithoutHashTag = word.substring(1);

            for (let char of wordWithoutHashTag) {
                let asciiCode = char.charCodeAt(0);

                if (!(asciiCode >= 65 && asciiCode <= 90) &&
                    !(asciiCode >= 97 && asciiCode <= 122)) {
                    isValidWord = false;
                    break;
                }

            }

            if (isValidWord) {
                console.log(wordWithoutHashTag);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');