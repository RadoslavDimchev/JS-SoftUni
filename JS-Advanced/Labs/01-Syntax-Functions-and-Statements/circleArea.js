function circleArea(input) {
  if (typeof input === 'number') {
    const area = input ** 2 * Math.PI;

    console.log(area.toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
  }
}

circleArea(5);
circleArea('name');