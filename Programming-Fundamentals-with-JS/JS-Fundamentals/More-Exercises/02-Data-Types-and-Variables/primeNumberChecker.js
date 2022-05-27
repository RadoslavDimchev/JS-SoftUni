function primeNumberChecker(number) {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    console.log(isPrime ? 'true' : 'false');
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);