class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (!model || horsepower < 0 || horsepower % 1 !== 0 || price < 0 || mileage < 0) {
      throw new Error('Invalid input!');
    }

    this.availableCars.push({ model, horsepower, price, mileage });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    const carIndex = this.availableCars.findIndex(c => c.model === model);
    if (carIndex === -1) {
      throw new Error(`${model} was not found!`);
    }

    const car = this.availableCars[carIndex];
    let price = Number(car.price);
    if (car.mileage <= desiredMileage) {
    } else if (car.mileage - desiredMileage <= 40000) {
      price *= 0.95;
    } else {
      price *= 0.90;
    }

    this.availableCars.splice(carIndex, 1);
    this.soldCars.push({ model, horsepower: car.horsepower, soldPrice: price });
    this.totalIncome += price;
    return `${model} was sold for ${price.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length === 0) {
      return 'There are no available cars';
    }
    const result = ['-Available cars:'];
    this.availableCars.forEach(c => {
      result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
    });
    return result.join('\n');
  }

  salesReport(criteria) {
    const sortMethods = {
      horsepower: (a, b) => b.horsepower - a.horsepower,
      model: (a, b) => a.model.localeCompare(b.model)
    };
    if (!sortMethods[criteria]) {
      throw new Error('Invalid criteria!');
    }
    const result = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${this.soldCars.length} cars sold:`
    ];

    this.soldCars.sort(sortMethods[criteria]);
    this.soldCars.forEach(c => {
      result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
    });

    return result.join('\n');
  }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$