function race(input) {
    const participants = input
        .shift()
        .split(/, /g);
    const racers = {};

    for (const line of input) {
        if (line !== 'end of race') {
            const racer = line.match(/[a-z]/gi).join('');
            const distance = line
                .match(/\d/g)
                .map(Number)
                .reduce((a, b) => a + b, 0);

            if (participants.includes(racer)) {
                if (!racers.hasOwnProperty(racer)) {
                    racers[racer] = 0;
                }

                racers[racer] += distance;
            }
        }
    }

    const sortedRacers = Object.keys(racers)
        .sort((a, b) => racers[b] - racers[a]);

    console.log(
        `1st place: ${sortedRacers[0]}\n2nd place: ${sortedRacers[1]}\n3rd place: ${sortedRacers[2]}`
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