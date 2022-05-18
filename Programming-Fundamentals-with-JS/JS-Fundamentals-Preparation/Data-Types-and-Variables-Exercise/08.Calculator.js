function calculator(number, operator, number2) {
    let sum;
    switch (operator) {
        case '+':
            sum = number + number2;
            break;
        case '-':
            sum = number - number2;
            break;
        case '*':
            sum = number * number2;
            break;
        case '/':
            sum = number / number2;
            break;
    }
    console.log(sum.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);