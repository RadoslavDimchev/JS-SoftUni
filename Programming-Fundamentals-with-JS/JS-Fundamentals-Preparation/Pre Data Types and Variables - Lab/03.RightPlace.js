function rightPlace(word, char, match) {
    let result = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] == '_') {
            result += char;
        } else {
            result += word[i];
        }
    }

    let output = result == match ? 'Matched' : 'Not Matched';
    console.log(output);
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');