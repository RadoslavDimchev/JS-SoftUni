function perfectNumber(number) {
    function findPerfectNumber(number) {
        let perfectNumber = 0;
        for (let i = number - 1; i > 0; i--) {
            if (number % i === 0) {
                perfectNumber += i;
            }
        }
        return perfectNumber;
    }

    function isPerfect() {
        console.log(findPerfectNumber(number) === number ? "We have a perfect number!" : "It's not so perfect.");
    }

    isPerfect();
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);