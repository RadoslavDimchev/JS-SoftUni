function inventory(input) {
    let journal = input.shift().split(', ');

    while (input[0] !== 'Craft!') {
        let [command, item] = input.shift().split(' - ');
        let index = journal.indexOf(item);

        if (command === 'Combine Items') {
            combineItems(item);
            continue;
        }

        if (isJournalIncludes(item)) {

            if (command === 'Drop') {
                removeItem(index);

            } else if (command === 'Renew') {
                removeItem(index);
                addItemToEnd(item);
            }
        } else {
            if (command === 'Collect') {
                addItemToEnd(item);
            }
        }
    }

    console.log(journal.join(', '));

    function isJournalIncludes(item) {
        let isIncludes = journal.includes(item);
        return isIncludes;
    }

    function combineItems(item) {
        let [currItem, newItem] = item.split(':');

        if (isJournalIncludes(currItem)) {
            let indexOfCurrItem = journal.indexOf(currItem);
            journal.splice(indexOfCurrItem + 1, 0, newItem);
        }
    }

    function addItemToEnd(item) {
        journal.push(item);
    }

    function removeItem(index) {
        journal.splice(index, 1);
    }
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!']);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);