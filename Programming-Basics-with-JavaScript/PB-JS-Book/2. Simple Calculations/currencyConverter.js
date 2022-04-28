function currencyConverter([arg1, arg2, arg3]) {
    let amount = parseFloat(arg1);
    let inputCurrency = arg2;
    let outputCurrency = arg3;

    let usd = 1.79549;
    let eur = 1.95583;
    let gbp = 2.53405;

    if (inputCurrency == 'USD') {
        amount *= usd;
    } else if (inputCurrency == 'EUR') {
        amount *= eur;
    } else if (inputCurrency == 'GBP') {
        amount *= gbp;
    }

    if (outputCurrency == 'USD') {
        amount /= usd;
    } else if (outputCurrency == 'EUR') {
        amount /= eur;
    } else if (outputCurrency == 'GBP') {
        amount /= gbp;
    }

    console.log(`${amount.toFixed(2)} ${outputCurrency}`);
}

currencyConverter([20, 'USD', 'BGN']);
currencyConverter([12.35, 'EUR', 'GBP']);