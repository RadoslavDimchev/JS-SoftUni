function jansNotation(input) {
  const operands = [];
  const operators = [];
  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };

  for (const el of input) {
    typeof el === 'number' ? operands.push(el) : operators.push(el);

    if (operands.length > 1 && operators.length > 0) {
      calcs();
    }
  }

  if (operands.length > 1) {
    console.log("Error: too many operands!");
  } else if (operators.length >= 1) {
    console.log("Error: not enough operands!");
  } else {
    console.log(operands[0]);
  }

  function calcs() {
    const operator = operators.shift();
    const second = operands.pop();
    const first = operands.pop();

    const result = operations[operator](first, second);
    operands.push(result);
  }
}

jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);
jansNotation([31, 2, '+', 11, '/']);