function storeProvision(currentStock, orderedStock) {
    let products = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        products[currentStock[i]] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderedStock.length; i += 2) {
        let productNames = Object.keys(products);
        let currProduct = orderedStock[i];
        let currProductQuantity = Number(orderedStock[i + 1]);
        let isAvailable = false;

        for (let j = 0; j < productNames.length; j++) {
            let currProductOfStock = productNames[j];
            if (currProduct === currProductOfStock) {
                products[currProductOfStock] += currProductQuantity;
                isAvailable = true;
                break;
            }
        }

        if (!isAvailable) {
            products[currProduct] = currProductQuantity;
        }
    }

    for (let product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);