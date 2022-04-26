function uSDToBGN([arg1]) {
    let usd = parseFloat(arg1);
    let bgn = usd * 1.79549;
    console.log(bgn.toFixed(2) + ' BGN');
}

uSDToBGN([20]);