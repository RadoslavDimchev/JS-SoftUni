function melrahShake(input = []) {
    let characters = input[0];
    let pattern = input[1];

    while (pattern.length > 0) {
        let firstMatch = characters.indexOf(pattern);
        let secondMatch = characters.lastIndexOf(pattern);

        if (firstMatch !== secondMatch) {
            console.log('Shaked it.');

            characters = characters.split('');
            characters.splice(firstMatch, pattern.length);
            characters = characters.join('');

            secondMatch = characters.lastIndexOf(pattern);
            characters = characters.split('');
            characters.splice(secondMatch, pattern.length);
            characters = characters.join('');

            pattern = pattern.split('')
            pattern.splice(pattern.length / 2, 1)
            pattern = pattern.join('');

            continue;
        }

        break;
    }

    console.log('No shake.');
    console.log(characters);
}

melrahShake(['astalavista baby',
    'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']);