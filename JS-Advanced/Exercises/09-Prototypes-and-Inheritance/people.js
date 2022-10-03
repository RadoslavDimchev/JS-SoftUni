function people() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
    }

    work() {
      console.log(this.tasks[0]);
      this.tasks.push(this.tasks.shift());
    }

    collectSalary() {
      console.log(`${this.name} received ${this.salary + (this.dividend ? this.dividend : 0)} this month.`);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [`${this.name} is working on a simple task.`];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [`${this.name} is working on a complicated task.`, `${this.name} is taking time off work.`, `${this.name} is supervising junior workers.`];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`];
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager
  };
}

const classes = people();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();  

// Ivan is working on a simple task. 
// Ivan is working on a simple task. 
 
// Ivan received 5811 this month. 
 
// Alex is working on a complicated task. 
// Alex is taking time off work. 
// Alex is supervising junior workers. 
// Alex is working on a complicated task. 
 
// Alex received 12050 this month. 
// Tom received 15000 this month. 
// Tom received 17500 this month. 