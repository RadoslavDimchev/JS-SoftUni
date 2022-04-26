function circleAreaAndPerimeter([arg1]) {
    let r = parseFloat(arg1);
    console.log('Area = ' + Math.PI * r * r);
    console.log('Perimeter = ' + 2 * Math.PI * r);
}

circleAreaAndPerimeter([10]);