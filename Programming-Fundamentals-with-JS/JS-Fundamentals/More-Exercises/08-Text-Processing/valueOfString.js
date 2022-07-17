function valueOfString(input = []) {
    const text = input[0];
    const command = input[1];
    let sum = 0;

    for (const char of text) {
        const asciiCode = char.charCodeAt();

        if (command === 'UPPERCASE') {
            if (asciiCode >= 65 && asciiCode <= 90) {
                sum += asciiCode;
            }
        } else {
            if (asciiCode >= 97 && asciiCode <= 122) {
                sum += asciiCode;
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}


// second solution with RegExp

/* function valueOfString(input = []) {
    const text = input[0];
    const command = input[1];
    let sum = 0;

    const pattern = command === 'UPPERCASE'
        ? /[A-Z]/g
        : /[a-z]/g;

    text.match(pattern)
        .forEach(char => sum += char.charCodeAt());

    console.log(`The total sum is: ${sum}`);
} */

valueOfString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);
valueOfString(['AC/DC',
    'UPPERCASE']);