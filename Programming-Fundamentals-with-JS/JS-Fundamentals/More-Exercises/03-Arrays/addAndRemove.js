function addAndRemove(arr) {
    let initialNumber = 0;
    let newArr = [];

    for (let command of arr) {
        initialNumber++;
        if (command === 'add') {
            newArr.push(initialNumber);
        } else if (command === 'remove') {
            newArr.pop(initialNumber);
        }
    }

    console.log(newArr.length > 0 ? newArr.join(' ') : 'Empty');
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);