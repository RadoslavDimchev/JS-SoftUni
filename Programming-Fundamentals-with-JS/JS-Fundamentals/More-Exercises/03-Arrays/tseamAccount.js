function tseamAccount(input) {
    let account = input.shift().split(' ');
    let commands = input.join().split(',');

    while (commands[0] !== 'Play!') {
        let info = commands[0].split(' ');
        let [command, game] = info;

        let isGameIncludes = account.includes(game);

        switch (command) {
            case 'Install':
                if (!isGameIncludes) {
                    account.push(game);
                }
                break;
            case 'Uninstall':
                if (isGameIncludes) {
                    let position = account.indexOf(game);
                    account.splice(position, 1);
                }
                break;
            case 'Update':
                if (isGameIncludes) {
                    let position = account.indexOf(game);
                    account.splice(position, 1);
                    account.push(game);
                }
                break;
            case 'Expansion':
                let [gameToExpand, expansion] = game.split('-');

                if (account.includes(gameToExpand)) {
                    let position = account.indexOf(gameToExpand) + 1;
                    account.splice(position, 0, `${gameToExpand}:${expansion}`);
                }
                break;
        }

        commands.shift();
    }

    console.log(account.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);