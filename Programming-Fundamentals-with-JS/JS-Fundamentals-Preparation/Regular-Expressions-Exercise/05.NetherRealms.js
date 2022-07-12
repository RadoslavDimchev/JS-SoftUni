function netherRealms(input = '') {
    const demons = input.split(/[, ]+/g);
    const listOfDemonsData = [];

    for (const demon of demons) {
        const patternForHealth = /[^0-9+\-*\/\.]/g;
        const patternForNumbers = /([-]*\d+([\.]*[\d]+)?)/g;
        const patternForOperators = /[*\/]/g;

        const characters = demon.match(patternForHealth);
        const numbers = demon.match(patternForNumbers);
        const operators = demon.match(patternForOperators);

        let health = 0;
        let damage = 0;

        if (characters) {
            characters.forEach(char => health += char.charCodeAt());
        }

        if (numbers) {
            damage = numbers
                .map(Number)
                .reduce((a, b) => a + b, 0);
        }

        if (operators) {
            operators.forEach(op => {
                op === '*' ? damage *= 2 : damage /= 2
            });
        }

        listOfDemonsData
            .push(
                `${demon} - ${health} health, ${damage.toFixed(2)} damage`
            );
    }

    listOfDemonsData
        .sort((a, b) => a.localeCompare(b))
        .forEach(demon => console.log(demon));
}

netherRealms(`M3ph-0.5s-0.5t0.0**`);
netherRealms(`M3ph1st0**, Azazel, Azazel`);
netherRealms(`Gos/ho`);