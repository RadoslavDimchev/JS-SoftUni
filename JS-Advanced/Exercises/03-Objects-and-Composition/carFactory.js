function carFactory(order) {
  const engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
  const carriage = [{ type: 'hatchback', color: order.color }, { type: 'coupe', color: order.color }];
  const wheelsize = order.wheelsize % 2 === 1 ? order.wheelsize : order.wheelsize - 1;

  return {
    model: order.model,
    engine: engines.filter(e => e.power >= order.power)[0],
    carriage: carriage.filter(c => c.type === order.carriage)[0],
    wheels: new Array(4).fill(wheelsize)
  };
}

console.log(carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
}));
console.log(carFactory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17
}));