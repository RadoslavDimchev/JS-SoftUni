function storeCatalogue(arr) {
  const letters = {};

  for (const data of arr) {
    let [product, price] = data.split(' : ');
    price = Number(price);

    const letter = product[0];

    if (!letters[letter]) {
      letters[letter] = {};
    }

    letters[letter][product] = price;
  }

  const sortedLetters = Object
    .keys(letters)
    .sort((a, b) => a.localeCompare(b));

  for (const letter of sortedLetters) {
    console.log(letter);

    Object
      .keys(letters[letter])
      .sort((a, b) => a.localeCompare(b))
      .forEach(product => console.log(`  ${product}: ${letters[letter][product]}`));
  }
}

storeCatalogue(['Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10']);
storeCatalogue(['Banana : 2',
  'Rubic"s Cube : 5',
  'Raspberry P : 4999',
  'Rolex : 100000',
  'Rollon : 10',
  'Rali Car : 2000000',
  'Pesho : 0.000001',
  'Barrel : 10']);