function softUniBarIncome(input) {
    let income = 0;

    while (input[0] !== 'end of shift') {
        const line = input.shift();

        const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+([.][\d]+)?)\$/g;
        const match = pattern.exec(line);

        if (match) {
            const currentIncome = +match.groups.count * +match.groups.price;
            income += currentIncome;
            console.log(`${match.groups.customer}: ${match.groups.product} - ${currentIncome.toFixed(2)}`);
        }
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