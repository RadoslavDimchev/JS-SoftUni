function breakfastRobot() {
  const recipes = {
    apple: {
      'carbohydrate': 1,
      'flavour': 2
    },
    lemonade: {
      'carbohydrate': 10,
      'flavour': 20
    },
    burger: {
      'carbohydrate': 5,
      'fat': 7,
      'flavour': 3
    },
    eggs: {
      'protein': 5,
      'fat': 1,
      'flavour': 1
    },
    turkey: {
      'protein': 10,
      'carbohydrate': 10,
      'fat': 10,
      'flavour': 10
    }
  };

  const stocks = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  };

  const commmands = {
    restock,
    prepare,
    report
  };

  return manager;

  function manager(input) {
    const [command, ...params] = input.split(' ');
    return commmands[command](...params);
  }

  function restock(microelement, quantity) {
    stocks[microelement] += Number(quantity);
    return 'Success';
  }

  function prepare(recipe, quantity) {
    quantity = Number(quantity);
    const ingredients = Object.entries(recipes[recipe]);

    for (const [ingredient, required] of ingredients) {
      if (stocks[ingredient] < required * quantity) {
        return `Error: not enough ${ingredient} in stock`;
      }
    }

    ingredients.forEach(([ingredient, required]) => stocks[ingredient] -= required * quantity);

    return 'Success';
  }

  function report() {
    return `protein=${stocks.protein} carbohydrate=${stocks.carbohydrate} fat=${stocks.fat} flavour=${stocks.flavour}`;
  }
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // protein=0 carbohydrate=0 fat=0 flavour=50