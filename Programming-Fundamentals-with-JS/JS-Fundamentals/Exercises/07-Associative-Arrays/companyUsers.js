function companyUsers(input = []) {
    // create a collection
    const companies = {};

    // parse input
    for (const data of input) {
        const [company, employee] = data.split(' -> ');

        // store company and it's employees
        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }

        companies[company].add(employee);
    };

    // sort and print
    Object
        .keys(companies)
        .sort()
        .forEach(company => {
            console.log(company);

            for (const empolyee of companies[company]) {
                console.log(`-- ${empolyee}`);
            }
        });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);