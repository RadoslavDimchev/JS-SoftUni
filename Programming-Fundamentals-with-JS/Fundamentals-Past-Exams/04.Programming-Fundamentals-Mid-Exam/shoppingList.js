function shoppingList(input) {
    let list = input.shift().split('!');

    while (input[0] !== 'Go Shopping!') {
        let [command, item, newItem] = input.shift().split(' ');
        let index = list.indexOf(item);

        if (list.includes(item)) {
            if (command === 'Unnecessary') {
                removeItem(index);

            } else if (command === 'Correct') {
                list[index] = newItem;

            } else if (command === 'Rearrange') {
                removeItem(index);
                list.push(item);
            }
        } else {
            if (command === 'Urgent') {
                list.unshift(item);
            }
        }
    }

    console.log(list.join(', '));

    function removeItem(index) {
        list.splice(index, 1);
    }
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);