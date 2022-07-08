function phoneBook(input) {
    const book = {};

    input.forEach(el => {
        const [name, phone] = el.split(' ');
        book[name] = phone;
    });

    for (const person in book) {
        console.log(person, '->', book[person]);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);