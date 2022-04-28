function radiansToDegrees([arg1]) {
    let rad = parseFloat(arg1);
    let degrees = rad * 180 / Math.PI;
    console.log(Math.round(degrees));
}

radiansToDegrees([3.1416]);