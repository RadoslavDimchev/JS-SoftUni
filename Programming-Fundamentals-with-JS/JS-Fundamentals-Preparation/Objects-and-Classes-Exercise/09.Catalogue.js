function catalogue(array) {
    let products = {};
    for (let tokens of array) {
        let info = tokens.split(' : ');
        let name = info[0];
        let price = Number(info[1]);
        products[name] = price;
    }

    let sortedProducts = Object.keys(products);
    sortedProducts.sort((a, b) => a.localeCompare(b));

    let pastLetter = '';
    for (let currentProduct of sortedProducts) {
        let currentLetter = currentProduct.charAt(0).toUpperCase();
        if (currentLetter === pastLetter) {
            console.log(`  ${currentProduct}: ${products[currentProduct]}`);
        } else {
            pastLetter = currentLetter;
            console.log(currentLetter);
            console.log(`  ${currentProduct}: ${products[currentProduct]}`);
        }
    }
}

// Second solution

// function catalogue(array) {
//     let products = [];
//     for (let tokens of array) {
//         let info = tokens.split(' : ');
//         let name = info[0];
//         let price = Number(info[1]);
//         let product = {
//             name,
//             price
//         };
//         products.push(product);
//     }

//     products.sort((a, b) => a.name.localeCompare(b.name));

//     let pastLetter = '';
//     for (let currentProduct of products) {
//         let currentLetter = currentProduct.name.charAt(0).toUpperCase();
//         if (currentLetter === pastLetter) {
//             console.log(`  ${currentProduct.name}: ${currentProduct.price}`);
//         } else {
//             pastLetter = currentLetter;
//             console.log(currentLetter);
//             console.log(`  ${currentProduct.name}: ${currentProduct.price}`);
//         }
//     }
// }

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