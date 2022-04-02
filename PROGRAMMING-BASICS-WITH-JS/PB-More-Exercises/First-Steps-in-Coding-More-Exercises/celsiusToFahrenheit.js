function celsiusToFahrenheit(input) {

    let celsius = Number(input[0]);

    let celsiusToFahrenheit = celsius * 1.8 + 32;

    console.log(celsiusToFahrenheit.toFixed(2));
}

celsiusToFahrenheit([25]);
celsiusToFahrenheit([0]);
celsiusToFahrenheit([-5.5]);
celsiusToFahrenheit([32.3]);