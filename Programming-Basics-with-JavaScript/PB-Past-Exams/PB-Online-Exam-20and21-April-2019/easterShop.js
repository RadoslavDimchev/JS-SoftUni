function easterShop(input) {

    let startEggs = Number(input[0]);
    let index = 1;
    let command = input[index];
    let soldEggs = 0;

    while (command !== "Close") {
        let buyOrFill = input[index];
        index++;
        let eggs = Number(input[index]);
        index++;
        let currentEggs = startEggs;

        if (buyOrFill === "Buy") {
            startEggs -= eggs;
            soldEggs += eggs;

            if (currentEggs < eggs) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${currentEggs}.`);
                break;
            }

        } else if (buyOrFill === "Fill") {
            startEggs += eggs;
        }

        command = input[index];
    }

    if (command === "Close") {
        console.log(`Store is closed!`);
        console.log(`${soldEggs} eggs sold.`);
    }

}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
