function furniture(input) {
    let totalCost = 0;

    console.log('Bought furniture:');

    while (input[0] !== 'Purchase') {
        const text = input.shift();
        const regex = />>(?<name>\w+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;
        const result = regex.exec(text);

        if (result) {
            totalCost += +result.groups.price * +result.groups.quantity;
            console.log(result.groups.name);
        }
    }

    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']);