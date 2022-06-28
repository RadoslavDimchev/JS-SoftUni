function partyTime(input) {
    let vip = [];
    let regular = [];

    while (input[0] !== 'PARTY') {
        let guest = input.shift();

        if (guest[0] >= 0 && guest[0] <= 9) {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    while (input.length > 0) {
        let guest = input.shift();

        removeGuestComing(vip, guest);
        removeGuestComing(regular, guest);
    }

    console.log(vip.length + regular.length);
    printGuestsNotComing(vip);
    printGuestsNotComing(regular);

    function removeGuestComing(list, guest) {
        if (list.includes(guest)) {
            let index = list.indexOf(guest);
            list.splice(index, 1);
        }
    }

    function printGuestsNotComing(list) {
        list.forEach(guest => console.log(guest));
    }
}

partyTime(['IK9Yo0h',
    '7IK9Yo0h',
    '8IK9Yo0h',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']);