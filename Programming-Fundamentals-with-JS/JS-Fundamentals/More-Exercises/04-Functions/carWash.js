function carWash(input) {
    let value = 0;

    for (const command of input) {
        switch (command) {
            case 'soap':
                soap(); break;
            case 'water':
                water(); break;
            case 'vacuum cleaner':
                vacuumCleaner(); break;
            case 'mud':
                mud(); break;
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);

    function soap() {
        value += 10;
    }

    function water() {
        value *= 1.2;
    }

    function vacuumCleaner() {
        value *= 1.25;
    }

    function mud() {
        value *= 0.9;
    }
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);