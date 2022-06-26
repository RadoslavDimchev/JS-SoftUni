function friendListMaintenance(input) {
    let friends = input.shift().split(', ');
    let blacklistedCount = 0;
    let lostCount = 0;

    while (input[0] !== 'Report') {
        let [command, value, newName] = input.shift().split(' ');

        switch (command) {
            case 'Blacklist':
                blacklist(value);
                break;
            case 'Error':
                error(value);
                break;
            case 'Change':
                change(value, newName);
                break;
        }
    }

    console.log(`Blacklisted names: ${blacklistedCount}\n` +
        `Lost names: ${lostCount}\n` + `${friends.join(' ')}`);

    function blacklist(name) {
        let index = friends.indexOf(name);

        if (friends.includes(name)) {
            friends[index] = 'Blacklisted';
            blacklistedCount++;
            console.log(`${name} was blacklisted.`);
        } else {
            console.log(`${name} was not found.`);
        }
    }

    function error(index) {
        index = Number(index);

        if (index >= 0 && index < friends.length) {
            let username = friends[index];

            if (username !== 'Blacklisted' && username !== 'Lost') {
                lostCount++;
                console.log(`${username} was lost due to an error.`);
                friends[index] = 'Lost';
            }
        }
    }

    function change(index, newName) {
        index = Number(index);

        if (index >= 0 && index < friends.length) {
            console.log(`${friends[index]} changed his username to ${newName}.`);
            friends[index] = newName;
        }
    }
}

friendListMaintenance(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"]);
friendListMaintenance(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"]);
friendListMaintenance(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"]);