function fruit(fruitType, weightGrams, pricePerKg) {
  const weightKg = weightGrams / 1000;
  const money = weightKg * pricePerKg;

  console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);