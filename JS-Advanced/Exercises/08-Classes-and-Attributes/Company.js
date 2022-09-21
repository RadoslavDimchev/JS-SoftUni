class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error('Invalid input!');
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push({ name, salary, position });

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let highestAvgSalary = 0;
    let bestDepartment;

    for (const [department, data] of Object.entries(this.departments)) {
      let currentAvgSalary = data.reduce((a, b) => a + Number(b.salary), 0) / data.length;

      if (currentAvgSalary > highestAvgSalary) {
        highestAvgSalary = currentAvgSalary;
        bestDepartment = department;
      }
    }

    return `Best Department is: ${bestDepartment}\n` +
      `Average salary: ${highestAvgSalary.toFixed(2)}\n` +
      `${this.departments[bestDepartment]
        .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
        .map(e => `${e.name} ${e.salary} ${e.position}`)
        .join('\n')}`;
  }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());

// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer