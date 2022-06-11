function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let resultCharacters = [];

    for (let i = startChar + 1; i < endChar; i++) {
        let currentChar = String.fromCharCode(i);
        resultCharacters.push(currentChar);
    }

    console.log(resultCharacters.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');