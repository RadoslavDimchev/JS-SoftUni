function armies(input = []) {
    const leaders = {};
    const totalCounts = {};

    for (const command of input) {
        if (command.includes(':')) {
            addArmy(command);
        } else if (command.includes(' + ')) {
            addCount(command);
        } else {
            addOrDeleteLeader(command);
        }
    }

    sumTotalCounts();
    sortAndPrint();

    function addCount(command) {
        let [armyName, count] = command.split(' + ');
        count = +count;

        for (const [leader, army] of Object.entries(leaders)) {
            if (army.hasOwnProperty(armyName)) {
                army[armyName] += count;
            }
        }
    }

    function addArmy(command) {
        const tokens = command.split(': ');
        const leader = tokens.shift();
        let [armyName, count] = tokens
            .pop('')
            .split(', ');
        count = +count;

        if (leaders.hasOwnProperty(leader)) {
            leaders[leader][armyName] = count;
        }
    }

    function addOrDeleteLeader(command) {
        const tokens = command.split(' ');
        const data = tokens.pop();
        const leader = tokens.join(' ');

        if (data === 'arrives') {
            leaders[leader] = {};
        } else {
            delete leaders[leader];
        }
    }

    function sumTotalCounts() {
        for (let [leader, armies] of Object.entries(leaders)) {
            let sum = Object
                .values(armies)
                .reduce((a, b) => a + b, 0);

            totalCounts[leader] = sum;
        }
    }

    function sortAndPrint() {
        const sorted = Object
            .entries(totalCounts)
            .sort((a, b) => b[1] - a[1]);

        for (let [leader, count] of sorted) {
            console.log(`${leader}: ${count}`);

            Object
                .entries(leaders[leader])
                .sort((a, b) => b[1] - a[1])
                .forEach(([armyName, armyCount]) => {
                    console.log(`>>> ${armyName} - ${armyCount}`);
                });
        }
    }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000', 'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives',
    'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated', 'Porter: Retix, 3205']);
armies(['Rick Burr arrives', 'Findlay arrives',
    'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540',
    'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);