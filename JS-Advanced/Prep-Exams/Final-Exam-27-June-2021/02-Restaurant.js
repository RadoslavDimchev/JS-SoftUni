class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    for (const product of products) {
      let [productName, productQuantity, productTotalPrice] = product.split(' ');
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);

      if (this.budgetMoney >= productTotalPrice) {
        if (!this.stockProducts[productName]) {
          this.stockProducts[productName] = 0;
        }
        this.stockProducts[productName] += productQuantity;
        this.budgetMoney -= productTotalPrice;
        this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
      } else {
        this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
      }
    }

    return this.history.join('\n');
  }

  addToMenu(meal, neededProducts, price) {
    if (this.menu[meal]) {
      return `The ${meal} is already in the our menu, try something different.`;
    }

    this.menu[meal] = { neededProducts, price };

    const menuSize = Object.keys(this.menu).length;
    if (menuSize === 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    }
    return `Great idea! Now with the ${meal} we have ${menuSize} meals in the menu, other ideas?`;
  }

  showTheMenu() {
    const meals = Object.entries(this.menu);
    if (meals.length === 0) {
      return 'Our menu is not ready yet, please come later...';
    }

    return meals.map(([meal, data]) => `${meal} - $ ${data.price}`).join('\n');
  }

  makeTheOrder(meal) {
    const findedMeal = this.menu[meal];
    if (!findedMeal) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    for (const data of findedMeal.neededProducts) {
      let [product, quantity] = data.split(' ');
      quantity = Number(quantity);

      if (!this.stockProducts[product] || this.stockProducts[product] < quantity) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }
    }

    for (const data of findedMeal.neededProducts) {
      const [product, quantity] = data.split(' ');
      this.stockProducts[product] -= Number(quantity);
    }

    this.budgetMoney += Number(findedMeal.price);
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${findedMeal.price}.`;
  }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

// Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.