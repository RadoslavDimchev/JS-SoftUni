function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };

    let jsonStr = JSON.stringify(person);
    console.log(jsonStr);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');