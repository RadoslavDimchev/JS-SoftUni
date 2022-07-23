function race(input = []) {
    const participants = {};
    const listOfParticipants = input
        .shift()
        .split(', ')
        .forEach(participant => {
            participants[participant] = 0;
        });

    const patternForName = /[A-Za-z]+/g;
    const patternForDistance = /\d/g;

    while (input[0] !== 'end of race') {
        const text = input.shift();
        const name = text
            .match(patternForName)
            .join('');

        const distance = text
            .match(patternForDistance)
            .reduce((a, b) => Number(a) + Number(b), 0);

        if (participants.hasOwnProperty(name)) {
            participants[name] += distance;
        }
    }

    const sorted = Object
        .keys(participants)
        .sort((a, b) => participants[b] - participants[a]);

    console.log(
        `1st place: ${sorted[0]}\n` +
        `2nd place: ${sorted[1]}\n` +
        `3rd place: ${sorted[2]}`
    );
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);