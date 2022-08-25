function cookingByNumbers(number, ...params) {
  number = Number(number);

  const operations = {
    chop: (number) => number / 2,
    dice: (number) => Math.sqrt(number),
    spice: (number) => number + 1,
    bake: (number) => number * 3,
    fillet: (number) => number - number * 0.2
  };

  for (let i = 0; i < params.length; i++) {
    number = operations[params[i]](number);
    console.log(number);
  }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');