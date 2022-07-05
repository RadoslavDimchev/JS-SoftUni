function replaceRepeatingChars(text) {
    let unique = '';

    for (let i = 0; i < text.length; i++) {
        let currChar = text.charAt(i);
        let nextChar = text.charAt(i + 1);

        if (currChar !== nextChar) {
            unique += currChar;
        }
    }

    console.log(unique);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');