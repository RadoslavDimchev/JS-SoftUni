function listOfProducts(products) {
    let productsByname = products.sort();
    for (let i = 0; i < productsByname.length; i++) {
        console.log(`${i + 1}.${productsByname[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);