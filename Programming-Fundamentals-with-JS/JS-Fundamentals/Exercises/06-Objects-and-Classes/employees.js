function employees(input) {
    const list = {};

    input.forEach(person => {
        list[person] = person.length;
        console.log(`Name: ${person} -- Personal Number: ${list[person]}`);
    });

    // second solution
    /* const list = {};
 
    for (const person of input) {
        list.name = person;
        list.number = person.length;
 
        console.log(`Name: ${list.name} -- Personal Number: ${list.number}`);
    } */
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland']);