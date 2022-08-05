function needForSpeedIII(input = []) {
  const numberOfcars = Number(input.shift());
  const cars = {};
  const commands = {
    Drive: (car, distance, fuel) => {
      /* You need to drive the given distance, and you will need the given fuel to do that. If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
      If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel, and print: 
      "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
      You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!" */

      if (cars[car].fuel - fuel < 0) {
        console.log('Not enough fuel to make that ride');
      } else {
        cars[car].fuel -= fuel;
        const oldMilleage = Number(cars[car].mileage);
        cars[car].mileage = oldMilleage + distance;

        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

        if (cars[car].mileage >= 100000) {
          delete cars[car];
          console.log(`Time to sell the ${car}!`);
        }
      }
    },
    Refuel: (car, fuel) => {
      /* Refill the tank of your car.
      Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up. 
      Print a message in the following format: "{car} refueled with {fuel} liters" */
      const neededFuel = Math.min(75 - cars[car].fuel, fuel);

      const oldFuel = Number(cars[car].fuel);
      cars[car].fuel = oldFuel + neededFuel;

      console.log(`${car} refueled with ${neededFuel} liters`);
    },
    Revert: (car, kilometers) => {
      /* Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
      "{car} mileage decreased by {amount reverted} kilometers"
      If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
      DO NOT print anything. */
      const oldMilleage = Number(cars[car].mileage);
      cars[car].mileage = oldMilleage - kilometers;

      if (cars[car].mileage >= 10000) {
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      } else {
        cars[car].mileage = 10000;
      }
    }
  };

  for (let i = 0; i < numberOfcars; i++) {
    let [car, mileage, fuel] = input.shift().split('|');
    cars[car] = { mileage, fuel };
  }

  while (input[0] !== 'Stop') {
    let [command, car, paramOne, paramTwo] = input.shift().split(' : ');
    paramOne = Number(paramOne);

    commands[command](car, paramOne, paramTwo);
  }

  Object
    .entries(cars)
    .forEach(([car, data]) => {
      console.log(`${car} -> Mileage: ${data.mileage} kms, Fuel in the tank: ${data.fuel} lt.`);
    });
}

needForSpeedIII([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
]);
needForSpeedIII([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'
]);