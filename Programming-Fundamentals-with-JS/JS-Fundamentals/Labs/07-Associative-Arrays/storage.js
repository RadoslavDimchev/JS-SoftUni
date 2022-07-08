function storage(input) {
    const items = new Map();

    for (const data of input) {
        let [item, quantity] = data.split(' ');
        quantity = Number(quantity);

        let oldQuantity = 0;

        if (items.has(item)) {
            oldQuantity = items.get(item);
        }

        items.set(item, quantity + oldQuantity);
    }

    for (const [item, quantity] of items) {
        console.log(item, '->', quantity);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);