function storage(input) {
    let result = new Map();

    for (line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (result.has(product)) {
            let existing = result.get(product);
            result.set(product, existing + quantity);
        } else {
            result.set(product, quantity);
        }
    }

    for (let [product, quantity] of result) {
        console.log(product, '->', quantity);
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