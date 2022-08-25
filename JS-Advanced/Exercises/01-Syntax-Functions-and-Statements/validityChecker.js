function validityChecker(x1, y1, x2, y2) {
  const first = Math.sqrt(x1 ** 2 + y1 ** 2);
  const second = Math.sqrt(x2 ** 2 + y2 ** 2);
  const third = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  print(first, x1, y1);
  print(second, x2, y2);
  print(third, x1, y1, x2, y2);

  function print(number, p1, p2, p3 = 0, p4 = 0) {
    if (number % 1 === 0) {
      console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is valid`);
    } else {
      console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is invalid`);
    }
  }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);