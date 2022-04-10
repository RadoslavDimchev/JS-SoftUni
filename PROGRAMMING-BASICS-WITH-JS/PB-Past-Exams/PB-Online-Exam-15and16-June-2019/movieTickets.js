function movieTickets(input) {

    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let i = a1; i <= a2 - 1; i++) {
        for (let j = 1; j <= n - 1; j++) {
            for (let k = 1; k <= (n / 2 - 1); k++) {
                if (i % 2 == 1 && (i + j + k) % 2 == 1) {
                    let letter = String.fromCharCode(i);
                    console.log(`${letter}-${j}${k}${i}`);
                }
            }
        }
    }

}
movieTickets(["86", "88", "4"]);
movieTickets(["71", "74", "6"]);
