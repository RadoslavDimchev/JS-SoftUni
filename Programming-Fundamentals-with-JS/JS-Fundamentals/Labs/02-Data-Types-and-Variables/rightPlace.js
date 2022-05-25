function rightPlace(firstString, char, secondString) {
    let result = '';

    for (let i = 0; i < firstString.length; i++) {
        let currentChar = firstString[i];
        if (currentChar === '_') {
            result += char;
        } else {
            result += currentChar;
        }
    }

    if (result === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

    // let result = firstString.replace('_', char);
    // let output = result === secondString ? 'Matched' : 'Not Matched';
    // console.log(output); 
    // second solve
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');