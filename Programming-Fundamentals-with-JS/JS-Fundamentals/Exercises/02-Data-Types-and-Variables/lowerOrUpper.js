function lowerOrUpper(character) {
    let result = '';

    if (character === character.toUpperCase()) {
        result = 'upper-case';
    } else {
        result = 'lower-case';
    }

    console.log(result);
}

lowerOrUpper('L');
lowerOrUpper('f');