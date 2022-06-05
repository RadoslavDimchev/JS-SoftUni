function dungeonestDark(array) {
    let health = 100;
    let coins = 0;
    let rooms = array.join('').split('|');
    let roomCounter = 0;

    for (const room of rooms) {
        let infoAboutRoom = room.split(' ');
        let roomContent = infoAboutRoom[0];
        let contentNumber = Number(infoAboutRoom[1]);
        roomCounter++;

        switch (roomContent) {
            case 'potion':
                health += contentNumber;
                if (health > 100) {
                    contentNumber -= health - 100;
                    health = 100;
                }

                console.log(`You healed for ${contentNumber} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += contentNumber;
                console.log(`You found ${contentNumber} coins.`);
                break;
            default:
                health -= contentNumber;
                if (health > 0) {
                    console.log(`You slayed ${roomContent}.`);
                } else {
                    console.log(`You died! Killed by ${roomContent}.`);
                    return `Best room: ${roomCounter}`;
                }
                break;
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);