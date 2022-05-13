function sumFirstAndLast(array) {
    let firstElement = array.shift();
    let lastElement = array.pop();
    let sum = Number(firstElement) + Number(lastElement);

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);