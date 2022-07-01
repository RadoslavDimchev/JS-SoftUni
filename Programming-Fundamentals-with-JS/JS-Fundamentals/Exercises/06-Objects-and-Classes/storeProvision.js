function storeProvision(currentStock, ordered) {
    const products = {};

    addProducts(currentStock);
    addProducts(ordered);

    for (const product in products) {
        console.log(product, '->', products[product]);
    }

    function addProducts(listOfProducts) {
        const listOfProductsL = listOfProducts.length;

        for (let i = 0; i < listOfProductsL; i += 2) {
            const product = listOfProducts[i];
            const quantity = Number(listOfProducts[i + 1]);

            if (!products.hasOwnProperty(product)) {
                products[product] = 0;
            }

            products[product] += quantity;
        }
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);