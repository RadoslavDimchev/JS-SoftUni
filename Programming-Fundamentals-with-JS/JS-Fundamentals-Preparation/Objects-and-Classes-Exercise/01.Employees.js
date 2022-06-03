function employees(array) {
    class Employees {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    for (let employee of array) {
        let currentEmployee = new Employees(employee, employee.length);

        console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.personalNumber}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);