function juiceFlavors(input) {
  const juices = new Map();
  const producedBottles = new Map();

  input.forEach(d => {
    let [juice, quantity] = d.split(' => ');
    quantity = +quantity;

    if (!juices.has(juice)) {
      juices.set(juice, 0);
    }

    juices.set(juice, juices.get(juice) + quantity);

    if (juices.get(juice) >= 1000) {
      producedBottles.set(juice, Math.floor(juices.get(juice) / 1000));
    }
  });

  [...producedBottles].forEach(t => console.log(`${t[0]} => ${t[1]}`));
}

juiceFlavors(['Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549']);
console.log('--------');
juiceFlavors(['Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789']);