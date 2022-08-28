function lowestPricesInCities(arr) {
  const products = {};

  for (const data of arr) {
    let [town, product, price] = data.split(' | ');
    price = Number(price);

    if (products[product]) {
      if (price >= products[product].price) {
        continue;
      }
    }

    products[product] = { town, price };
  }

  for (const product in products) {
    console.log(`${product} -> ${products[product].price} (${products[product].town})`);
  }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10']);