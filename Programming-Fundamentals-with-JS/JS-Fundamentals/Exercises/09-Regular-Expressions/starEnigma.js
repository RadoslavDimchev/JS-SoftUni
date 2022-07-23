function starEnigma(input = []) {
    const messagesCount = +input.shift();
    const attackedPlanets = [];
    const destroyedPlanets = [];
    const patternForLettters = /[star]/gi;
    const patternForNewMessage =
        /@(?<name>[A-Za-z]+)[^@!:>-]*:(?<population>\d+)[^@!:>-]*!(?<type>[AD])![^@!:>-]*->(?<count>\d+)/;

    for (const message of input) {
        const match = message.match(patternForLettters);
        const count = match ? match.length : 0;

        let newMessage = '';
        let valid;

        for (let char of message) {
            newMessage += String.fromCharCode(char.charCodeAt() - count);
        }

        if ((valid = patternForNewMessage.exec(newMessage)) !== null) {
            const name = valid.groups.name;
            const population = valid.groups.population;
            const type = valid.groups.type;
            const count = valid.groups.count;

            if (type === 'A') {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);

    attackedPlanets
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);

    destroyedPlanets
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