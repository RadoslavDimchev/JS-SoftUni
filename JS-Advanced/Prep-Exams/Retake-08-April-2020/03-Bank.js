class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    const client = this.allCustomers.find(c => c.personalId === customer.personalId);
    if (client) {
      throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
    }

    this.allCustomers.push(customer);
    return customer;
  }

  depositMoney(personalId, amount) {
    const customer = this.findCustomer(this.allCustomers, personalId);

    if (!customer.totalMoney) {
      customer.totalMoney = 0;
    }
    if (!customer.transactions) {
      customer.transactions = [];
    }

    customer.transactions
      .unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
    customer.totalMoney += +amount;
    return customer.totalMoney + '$';
  }

  withdrawMoney(personalId, amount) {
    const customer = this.findCustomer(this.allCustomers, personalId);

    if (customer.totalMoney < amount) {
      throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
    }

    customer.transactions
      .unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
    customer.totalMoney -= amount;
    return customer.totalMoney + '$';
  }

  customerInfo(personalId) {
    const customer = this.findCustomer(this.allCustomers, personalId);

    return `Bank name: ${this._bankName}
Customer name: ${customer.firstName} ${customer.lastName}
Customer ID: ${customer.personalId}
Total Money: ${customer.totalMoney}$
Transactions:
${customer.transactions.join('\n')}`;
  }

  findCustomer(customers, personalId) {
    const customer = customers.find(c => c.personalId === personalId);
    if (!customer) {
      throw new Error('We have no customer with this ID!');
    }
    return customer;
  }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));

// { firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 }
// { firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!