function manOWar(array) {
    let pirateShipStatus = array.shift().split('>').map(Number);
    let warshipStatus = array.shift().split('>').map(Number);
    let maximumHealthCapacity = Number(array.shift());

    let command = array.shift();

    while (command !== 'Retire') {
        let tokens = command.split(' ');
        let commandName = tokens.shift();
        tokens = tokens.map(Number);

        switch (commandName) {
            case 'Fire':
                if (fire(tokens) === 'section breaks') {
                    return 'You won! The enemy ship has sunken.';
                }
                break;
            case 'Defend':
                if (defend(tokens) === 'section breaks') {
                    return 'You lost! The pirate ship has sunken.';
                }
                break;
            case 'Repair':
                repair(tokens);
                break;
            case 'Status':
                status();
                break;
        }

        command = array.shift();
    }

    let pirateShipStatusSum = pirateShipStatus.reduce((a, b) => a + b, 0);
    let warshipStatusSum = warshipStatus.reduce((a, b) => a + b, 0);

    console.log(`Pirate ship status: ${pirateShipStatusSum}`);
    console.log(`Warship status: ${warshipStatusSum}`);

    function fire(tokens) {
        let index = tokens[0];
        let damage = tokens[1];

        if (isValidIndex(index, warshipStatus.length)) {
            warshipStatus[index] -= damage;

            if (warshipStatus[index] <= 0) {
                return 'section breaks';
            }
        }
    }

    function defend(tokens) {
        let startIndex = tokens[0];
        let endIndex = tokens[1];
        let damage = tokens[2];

        let isValidStartIndex = (isValidIndex(startIndex, pirateShipStatus.length));
        let isValidEndIndex = (isValidIndex(endIndex, pirateShipStatus.length));

        if (isValidStartIndex && isValidEndIndex) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShipStatus[i] -= damage;

                if (pirateShipStatus[i] <= 0) {
                    return 'section breaks';
                }
            }
        }

    }

    function repair(tokens) {
        let index = tokens[0];
        let health = tokens[1];

        if (isValidIndex(index, pirateShipStatus.length)) {
            pirateShipStatus[index] += health;

            if (pirateShipStatus[index] > maximumHealthCapacity) {
                pirateShipStatus[index] = maximumHealthCapacity;
            }
        }
    }

    function status() {
        let sectionsNeedsRepair = pirateShipStatus.filter(x => x < maximumHealthCapacity * 0.2);
        console.log(`${sectionsNeedsRepair.length} sections need repair.`);
    }

    function isValidIndex(index, length) {
        if (index >= 0 && index < length) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]));
console.log(manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]));