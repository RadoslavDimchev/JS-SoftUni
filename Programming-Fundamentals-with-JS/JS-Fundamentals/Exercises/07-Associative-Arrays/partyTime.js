function partyTime(input = []) {
    // create a collections
    const vip = [];
    const regular = [];

    // while input element is not PARTY
    while (input[0] !== 'PARTY') {
        // get guest
        const guest = input.shift();

        // get first char of guest
        const fisrtChar = Number(guest[0]);

        // - check guest
        if (isNaN(fisrtChar)) {
            // -- add to regular
            regular.push(guest);
        } else {
            // -- add to VIP
            vip.push(guest);
        }
    }

    // for every element
    for (const guest of input) {
        if (vip.includes(guest)) {
            // - delete from VIP
            deleteGuest(vip, guest);
        } else if (regular.includes(guest)) {
            // - delete from regular
            deleteGuest(regular, guest);
        }
    }

    // print 

    // - total guests who didn't come
    console.log(vip.length + regular.length);

    // - VIP and regular on e new line
    vip.forEach(guest => console.log(guest));
    regular.forEach(guest => console.log(guest));

    function deleteGuest(guestType, guest) {
        const indexOfGuest = guestType.indexOf(guest);
        guestType.splice(indexOfGuest, 1);
    }
}

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