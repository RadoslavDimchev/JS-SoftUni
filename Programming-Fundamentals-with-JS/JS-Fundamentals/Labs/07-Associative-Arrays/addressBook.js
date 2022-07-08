function addressBook(input) {
    const book = {};

    for (const data of input) {
        const [name, address] = data.split(':');
        book[name] = address;
    }

    Object
        .keys(book)
        .sort((a, b) => (a.localeCompare(b)))
        .forEach(person => console.log(person, '->', book[person]));
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);