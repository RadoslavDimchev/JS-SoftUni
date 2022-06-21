function jansNotation(array) {
  let operands = [];
  let operators = [];

  for (let instruction of array) {
    if (typeof instruction === "number") {
      operands.push(instruction);
    } else {
      operators.push(instruction);
    }

    if (operands.length > 1) {
      while (operators.length > 0) {
        let secondOperand = operands.pop();
        let firstOperand = operands.pop();
        let operator = operators.shift();

        switch (operator) {
          case "+":
            operands.push(firstOperand + secondOperand);
            break;
          case "-":
            operands.push(firstOperand - secondOperand);
            break;
          case "*":
            operands.push(firstOperand * secondOperand);
            break;
          case "/":
            operands.push(firstOperand / secondOperand);
            break;
        }
      }
    }
  }

  if (operands.length > 1) {
    console.log("Error: too many operands!");
  } else if (operators.length === 1) {
    console.log("Error: not enough operands!");
  } else {
    console.log(operands.join(" "));
  }
}

jansNotation([3, 4, "+"]);
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
jansNotation([15, "/"]);
jansNotation([31, 2, "+", 11, "/"]);
jansNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);
