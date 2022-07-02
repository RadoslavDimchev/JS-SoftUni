function catalogue(array) {
    const products = {};

    for (const element of array) {
        let [product, price] = element.split(' : ');
        products[product] = price;
    }

    const sortedProducts = Object
        .keys(products)
        .sort((a, b) => a.localeCompare(b));


    let pastProduct = '';

    for (const product of sortedProducts) {
        if (!product.startsWith(pastProduct[0])) {
            console.log(product[0]);
        }

        pastProduct = product;
        console.log(`  ${product}: ${products[product]}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59']);