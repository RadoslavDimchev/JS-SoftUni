function muOnline(input) {
    let rooms = input.split('|');

    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    let isDead = false;

    while (rooms.length > 0) {
        let [command, number] = rooms.shift().split(' ');
        number = Number(number);

        roomCounter++;

        if (command === 'potion') {
            potion(number);
        } else if (command === 'chest') {
            chest(number);
        } else {
            fight(command, number);

            if (isDead) {
                break;
            }
        }
    }

    if (!isDead) {
        console.log(`You've made it!\n` +
            `Bitcoins: ${bitcoins}\n` +
            `Health: ${health}`);
    }

    function potion(number) {
        health += number;

        if (health > 100) {
            number -= health - 100;
            health = 100;
        }

        console.log(`You healed for ${number} hp.`);
        console.log(`Current health: ${health} hp.`);
    }

    function chest(bitcoinAmount) {
        bitcoins += bitcoinAmount;
        console.log(`You found ${bitcoinAmount} bitcoins.`);
    }

    function fight(monster, number) {
        health -= number;

        if (health > 0) {
            console.log(`You slayed ${monster}.`);
        } else {
            isDead = true;
            console.log(`You died! Killed by ${monster}.\n` +
                `Best room: ${roomCounter}`);
        }
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");