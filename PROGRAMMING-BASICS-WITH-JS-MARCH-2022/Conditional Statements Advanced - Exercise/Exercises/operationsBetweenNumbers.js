function operationsBetweenNumbers(input) {

    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];

    switch (operator) {
        case "+":
            if ((number1 + number2) % 2 === 0) {
                console.log(`${number1} + ${number2} = ${number1 + number2} - even`);
            } else {
                console.log(`${number1} + ${number2} = ${number1 + number2} - odd `);
            }
            break;
        case "-":
            if ((number1 - number2) % 2 === 0) {
                console.log(`${number1} - ${number2} = ${number1 - number2} - even`);
            } else {
                console.log(`${number1} - ${number2} = ${number1 - number2} - odd `);
            }
            break;
        case "*":
            if ((number1 * number2) % 2 === 0) {
                console.log(`${number1} * ${number2} = ${number1 * number2} - even`);
            } else {
                console.log(`${number1} * ${number2} = ${number1 * number2} - odd `);
            }
            break;
        case "/":
            if (number2 === 0) {
                console.log(`Cannot divide ${number1} by zero`);
            } else {
                console.log(`${number1} / ${number2} = ${(number1 / number2).toFixed(2)}`);
            }
            break;
        case "%":
            if (number2 === 0) {
                console.log(`Cannot divide ${number1} by zero`);
            } else {
                console.log(`${number1} % ${number2} = ${number1 % number2}`);
            }
            break;
    }
}
operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);