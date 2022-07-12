function starEnigma(input) {
    const messages = +input.shift();
    const attacked = [];
    const destroyed = [];
    const letters = ['s', 't', 'a', 'r'];
    const pattern =
        /@([A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!([A|D])![^@\-!:>]*->\d+/;

    for (const encryptedMessage of input) {
        let count = 0;

        encryptedMessage
            .toLowerCase()
            .split('')
            .forEach(char => {
                if (letters.includes(char)) {
                    count++;
                }
            });

        const decrypted = encryptedMessage
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt() - count))
            .join('');

        const match = decrypted.match(pattern);

        if (match) {
            if (match[2] === 'A') {
                attacked.push(match[1]);
            } else if (match[2] === 'D') {
                destroyed.push(match[1]);
            }
        }
    }

    console.log(`Attacked planets: ${attacked.length}`);
    attacked
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);