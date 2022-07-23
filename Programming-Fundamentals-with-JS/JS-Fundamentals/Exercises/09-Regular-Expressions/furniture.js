function furniture(input = []) {
    const furnitureList = [];
    const text = input.join(' ');
    const pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/g;
    let totalPrice = 0;
    let valid;

    while ((valid = pattern.exec(text)) !== null) {
        const name = valid.groups.name;
        const price = valid.groups.price;
        const quantity = valid.groups.quantity;

        furnitureList.push(name);
        totalPrice += price * quantity;
    }

    console.log('Bought furniture:');

    furnitureList.forEach(name => console.log(name));

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
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