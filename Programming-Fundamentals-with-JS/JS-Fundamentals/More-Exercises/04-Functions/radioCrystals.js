function radioCrystals(input) {
    let finalThickness = input.shift();

    while (input.length > 0) {
        let currentThickness = input.shift();

        console.log(`Processing chunk ${currentThickness} microns`);

        let cut = currentThickness => currentThickness / 4;
        let lap = currentThickness => currentThickness - currentThickness * 0.2;
        let grind = currentThickness => currentThickness - 20;
        let etch = currentThickness => currentThickness - 2;
        let xray = currentThickness => currentThickness + 1;
        let transoptAndWash = function () {
            currentThickness = Math.floor(currentThickness);
            console.log('Transporting and washing');
        };

        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;

        while (currentThickness !== finalThickness) {

            while (currentThickness / 4 >= finalThickness) {
                currentThickness = cut(currentThickness);
                cutCounter++;
            }

            if (cutCounter > 0) {
                console.log(`Cut x${cutCounter}`);
                transoptAndWash();
            }

            while (currentThickness * 0.8 >= finalThickness) {
                currentThickness = lap(currentThickness);
                lapCounter++;
            }

            if (lapCounter > 0) {
                console.log(`Lap x${lapCounter}`);
                transoptAndWash();
            }

            while (currentThickness - 20 >= finalThickness) {
                currentThickness = grind(currentThickness);
                grindCounter++;
            }

            if (grindCounter > 0) {
                console.log(`Grind x${grindCounter}`);
                transoptAndWash();
            }

            while (currentThickness - 2 >= finalThickness - 1) {
                currentThickness = etch(currentThickness);
                etchCounter++;
            }

            if (etchCounter > 0) {
                console.log(`Etch x${etchCounter}`);
                transoptAndWash();
            }

            if (currentThickness + 1 === finalThickness) {
                currentThickness = xray(currentThickness);
                console.log('X-ray x1');
            }
        }

        console.log(`Finished crystal ${currentThickness} microns`);
    }
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);