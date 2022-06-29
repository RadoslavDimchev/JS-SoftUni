function cardGame(input) {
    const powers = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    const types = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }

    const players = {};

    for (const line of input) {
        let [player, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!players.hasOwnProperty(player)) {
            players[player] = new Set();
        }

        for (const card of cards) {
            players[player].add(card);
        }
    }

    for (let [player, cards] of Object.entries(players)) {
        let value = 0;

        for (let card of cards) {
            let power = powers[card.charAt(0)];
            let type = types[card.slice(-1)];
            value += power * type;
        }

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

//second solution with array (without Set())
/* function cardGame(input) {
    const powers = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    const types = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }

    const players = {};

    for (const line of input) {
        let [player, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!players.hasOwnProperty(player)) {
            players[player] = [];
        }

        for (const card of cards) {
            if (!players[player].includes(card)) {
                players[player].push(card)
            }
        }
    }

    for (let [player, cards] of Object.entries(players)) {
        let value = 0;

        for (let card of cards) {
            let power = powers[card.charAt(0)];
            let type = types[card.slice(-1)];
            value += power * type;
        }

        console.log(`${player}: ${value}`);
    }
} */