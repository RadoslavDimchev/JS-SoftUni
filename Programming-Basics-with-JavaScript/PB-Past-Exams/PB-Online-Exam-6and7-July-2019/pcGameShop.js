function pcGameShop(input) {

    let n = Number(input[0]);
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= n; i++) {
        let typeGame = input[i]
        switch (typeGame) {
            case "Hearthstone":
                hearthstone++;
                break;
            case "Fornite":
                fornite++;
                break;
            case "Overwatch":
                overwatch++;
                break;
            default:
                others++;
                break;
        }

    }

    console.log(`Hearthstone - ${(hearthstone / n * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite / n * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch / n * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / n * 100).toFixed(2)}%`);

}
pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
pcGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
