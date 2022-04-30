function mathPower([a, b]) {
    let result = Math.pow(a, b);
    if (result.toString().indexOf('.') > 0) {
        result = Math.round(result * 1e15) / 1e15;
    }
    
    console.log(result);
}

mathPower([2, 8]);