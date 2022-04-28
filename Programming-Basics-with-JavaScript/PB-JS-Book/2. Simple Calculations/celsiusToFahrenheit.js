function celsiusToFahrenheit([arg1]) {
    let celsius = parseFloat(arg1);
    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit.toFixed(2));
}

celsiusToFahrenheit([25]);