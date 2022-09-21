function autoEngineeringCompany(input) {
  const cars = new Map();

  input.forEach(d => {
    let [brand, model, produced] = d.split(' | ');
    produced = Number(produced);

    if (!cars.has(brand)) {
      cars.set(brand, new Map());
    }

    if (!cars.get(brand).has(model)) {
      cars.get(brand).set(model, 0);
    }

    cars.get(brand).set(model, cars.get(brand).get(model) + produced);
  });

  [...cars]
    .forEach(([brand, models]) => {
      console.log(`${brand}\n` +
        [...models].map(([car, total]) => `###${car} -> ${total}`).join('\n'));
    });
}

autoEngineeringCompany(['Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10']);