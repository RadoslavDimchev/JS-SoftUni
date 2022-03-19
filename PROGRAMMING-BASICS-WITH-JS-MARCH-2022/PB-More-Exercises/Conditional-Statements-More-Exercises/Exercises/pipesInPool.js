function pipesInPool(input) {

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let p1Liters = p1 * h;
    let p2Liters = p2 * h;

    let sumLitersFromP = p1Liters + p2Liters;

    let p1Percent = ((p1Liters / sumLitersFromP) * 100).toFixed(2);
    let p2Percent = ((p2Liters / sumLitersFromP) * 100).toFixed(2);
    let poolPercent = ((sumLitersFromP / v) * 100).toFixed(2);

    let litersInMore = (sumLitersFromP - v);

    let res = 0;

    if (sumLitersFromP <= v) {
        res = (`The pool is ${poolPercent}% full. Pipe 1: ${p1Percent}%. Pipe 2: ${p2Percent}%.`);
    } else {
        res = (`For ${h} hours the pool overflows with ${litersInMore} liters.`);
    }
    
    console.log(res);
}
pipesInPool([1000, 100, 120, 3]);
pipesInPool([100, 100, 100, 2.5]);