const evenPositionElements = input =>
  input
    .filter((x, i) => i % 2 === 0)
    .join(' ');

console.log(evenPositionElements(['20', '30', '40', '50', '60']));
console.log(evenPositionElements(['5', '10']));