function sumFirstAndLast(arr) {
    let firstElement = arr.shift();
    let lastElement = arr.pop();

    let sum = Number(firstElement) + Number(lastElement);

    console.log(sum);

    /*     second solution without methods
    
        let firstElement = arr[0];
        let lastElement = arr[arr.length - 1];
    
        let sum = Number(firstElement) + Number(lastElement);
    
        console.log(sum); */
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);