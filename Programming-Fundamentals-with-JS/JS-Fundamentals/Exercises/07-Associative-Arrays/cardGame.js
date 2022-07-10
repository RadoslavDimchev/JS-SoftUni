function cardGame(input = []) {
    // create a collection to store name and cards
    const players = {};

    // create a collection of cards powers
    const powers = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    // create a collection of cards types
    const types = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    };

    // parse input
    for (const data of input) {
        let [player, cards] = data.split(': ');
        cards = cards.split(', ');

        // - store player and his cards
        if (!players.hasOwnProperty(player)) {
            players[player] = new Set();
        }

        cards.forEach(card => players[player].add(card));
    }

    // for every player
    for (const [player, cards] of Object.entries(players)) {

        // count value
        let value = 0;

        for (let card of cards) {
            card = card.split('')
            const type = types[card.pop()];
            const power = powers[card.join('')];

            value += type * power;
        }

        // print player and his hand value
        console.log(`${player}: ${value}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD']);