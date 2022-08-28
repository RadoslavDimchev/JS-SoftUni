function rectangle(width, height, color) {
  const figure = {
    width,
    height,
    color: color[0].toUpperCase() + color.slice(1)
  }

  figure.calcArea = () => {
    return figure.width * figure.height;
  }

  return figure;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());