function treasureHunt(array) {
    let initialLoot = array.shift().split('|');
    let command = array.shift();

    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        let name = tokens.shift();

        switch (name) {
            case 'Loot':
                for (let item of tokens) {
                    if (!initialLoot.includes(item)) {
                        initialLoot.unshift(item);
                    }
                }
                break;
            case 'Drop':
                let index = Number(tokens.shift());
                if (initialLoot.length > index && index >= 0) {
                    let itemToRemove = initialLoot.splice(index, 1);
                    initialLoot.push(itemToRemove.join());
                }
                break;
            case 'Steal':
                let itemsToSteal = Number(tokens.shift());
                let stolenItems = initialLoot.splice(-itemsToSteal);
                console.log(stolenItems.join(', '));
                break;
        }

        command = array.shift();
    }

    if (initialLoot.length > 0) {
        let sumOfItems = 0;
        for (let item of initialLoot) {
            sumOfItems += item.length;
        }

        let averageGain = sumOfItems / initialLoot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);