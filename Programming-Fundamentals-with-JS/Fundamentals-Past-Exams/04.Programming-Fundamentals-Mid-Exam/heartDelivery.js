function heartDelivery(input) {
    let neighborhood = input
        .shift()
        .split('@')
        .map(Number);

    let position = 0;

    while (input[0] !== 'Love!') {
        let tokens = input.shift().split(' ');
        let jump = Number(tokens[1]);

        position += jump

        if (position >= neighborhood.length) {
            position = 0;
        }

        if (neighborhood[position] === 0) {
            console.log(`Place ${position} already had Valentine's day.`);
        } else {
            neighborhood[position] -= 2;
            if (neighborhood[position] === 0) {
                console.log(`Place ${position} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${position}.`);

    neighborhood = neighborhood.filter(x => x !== 0);

    if (neighborhood.length > 0) {
        console.log(`Cupid has failed ${neighborhood.length} places.`);
    } else {
        console.log('Mission was successful.');
    }
}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);