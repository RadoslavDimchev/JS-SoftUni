function circleAreaAndPerimeter(input) {

    let r = Number(input[0]);

    let calculatedarea = Math.PI * r * r;
    let calculatedparameter = 2 * Math.PI * r;

    console.log(calculatedarea.toFixed(2));
    console.log(calculatedparameter.toFixed(2));
}

circleAreaAndPerimeter(["3"]);
circleAreaAndPerimeter(["4.5"]);