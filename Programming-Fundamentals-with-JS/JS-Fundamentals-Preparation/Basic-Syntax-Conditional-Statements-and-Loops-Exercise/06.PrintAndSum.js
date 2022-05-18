function printAndSum(startNumber, endNumber) {
    let print = '';
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        print += i + " ";
        sum += i;
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);