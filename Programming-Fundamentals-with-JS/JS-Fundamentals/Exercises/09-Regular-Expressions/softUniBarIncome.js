function softUniBarIncome(input = []) {
    const text = input.join(' ');
    const pattern =
        /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(?:.\d+)?)\$/g;
    let income = 0;
    let valid;

    while ((valid = pattern.exec(text)) !== null) {
        const customer = valid.groups.customer;
        const product = valid.groups.product;
        const count = valid.groups.count;
        const price = valid.groups.price;

        const currIncome = count * price;
        income += currIncome;

        console.log(`${customer}: ${product} - ${currIncome.toFixed(2)}`);
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);