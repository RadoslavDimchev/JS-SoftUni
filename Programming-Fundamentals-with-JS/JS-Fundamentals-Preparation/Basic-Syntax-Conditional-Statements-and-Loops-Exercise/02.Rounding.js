function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    number = number.toFixed(precision)
    console.log(parseFloat(number));
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);