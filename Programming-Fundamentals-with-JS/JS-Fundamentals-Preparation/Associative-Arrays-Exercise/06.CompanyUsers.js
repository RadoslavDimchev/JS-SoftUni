function companyUsers(input) {
    const companies = {};

    for (const line of input) {
        let [company, id] = line.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }

        companies[company].add(id);
    }

    let sortedCompanies = Object
        .keys(companies)
        .sort();

    for (const company of sortedCompanies) {
        console.log(company);

        for (const id of companies[company]) {
            console.log('--', id);
        }
    }
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