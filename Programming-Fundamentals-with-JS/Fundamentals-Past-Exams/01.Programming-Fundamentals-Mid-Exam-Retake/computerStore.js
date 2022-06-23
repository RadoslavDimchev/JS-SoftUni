function computerStore(input) {
    let priceWithoutTaxes = 0;

    while (input[0] !== 'regular') {

        if (input[0] === 'special') {
            break;
        }

        let currentPartPrice = Number(input.shift());

        if (currentPartPrice <= 0) {
            console.log('Invalid price!');
            continue;
        }

        priceWithoutTaxes += currentPartPrice;
    }

    let taxes = priceWithoutTaxes * 0.2;
    let totalPrice = priceWithoutTaxes + taxes;

    if (input[0] === 'special') {
        totalPrice *= 0.9;
    }

    if (totalPrice > 0) {
        console.log(`Congratulations you've just bought a new computer!\n` +
            `Price without taxes: ${priceWithoutTaxes.toFixed(2)}$\n` +
            `Taxes: ${taxes.toFixed(2)}$\n` +
            `-----------\n` +
            `Total price: ${totalPrice.toFixed(2)}$`
        );
    } else {
        console.log('Invalid order!');
    }
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special']);
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular']);
computerStore([
    'regular']);