function trapeziodArea(input) {
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let trapeziodArea = (b1 + b2) * h / 2;

    console.log(trapeziodArea.toFixed(2));
}

trapeziodArea([8, 13, 7])