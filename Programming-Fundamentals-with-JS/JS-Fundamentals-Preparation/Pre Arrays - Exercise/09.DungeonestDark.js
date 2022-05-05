function dungeonestDark(array) {
    let health = 100;
    let coins = 0;
    let rooms = array[0].split('|');
    let isFinished = true;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');

        if (room[0] === 'potion') {
            let currentAddHealth = Number(room[1]);
            if (health + currentAddHealth <= 100) {
                health += currentAddHealth;
            } else {
                currentAddHealth = 100 - health;
                health = 100;
            }
            console.log(`You healed for ${currentAddHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (room[0] === 'chest') {
            let currentCoins = Number(room[1]);
            coins += currentCoins;
            console.log(`You found ${currentCoins} coins.`);
        } else {
            let currentMonster = room[0];
            let damage = Number(room[1]);
            health -= damage;
            if (health > 0) {
                console.log(`You slayed ${currentMonster}.`);
            } else {
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${i + 1}`);
                isFinished = false;
                break;
            }
        }
    }

    if (isFinished) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);