function charactersInRange(firstChar, secondChar) {
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let characters = [];

    for (let i = start + 1; i < end; i++) {
        characters.push(String.fromCharCode(i));
    }

    console.log(characters.join(' '));
}

charactersInRange('a', 'd');