function diamond(input) {
    let n = Number(input[0]);
    let spaces = n;
    let leftRight = 0;

    for (let i = 1; i <= n; i++) {
        if (n % 2 == 0) {
            if (i == n) {
                break;
            }
        }

        if (i > Math.ceil(n / 2)) {
            if (n % 2 == 0) {
                leftRight = spaces + 1;
            } else {
                leftRight = spaces + 2;
            }
            spaces++;;
        } else {
            leftRight = Math.floor((spaces - 1) / 2);
            spaces -= 2;
        }

        if (i == 1 || i == n) {
            console.log('-'.repeat(leftRight) + '*'.repeat(n - 2 * leftRight) + '-'.repeat(leftRight));
        } else {
            console.log('-'.repeat(leftRight) + '*' + '-'.repeat(n - 2 * leftRight - 2) + '*' + '-'.repeat(leftRight));
        }
    }
}

diamond([10]);