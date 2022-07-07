function matchFullName(input) {
    const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let match = pattern.exec(input);

    const names = [];

    while (match !== null) {
        names.push(match);

        match = pattern.exec(input);
    }

    console.log(names.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");