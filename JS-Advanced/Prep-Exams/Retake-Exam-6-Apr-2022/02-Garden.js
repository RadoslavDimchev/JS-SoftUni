class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error('Not enough space in the garden.');
    }

    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0
    });

    this.spaceAvailable -= spaceRequired;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    const plant = this.plants.find(p => p.plantName === plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    plant.ripe = true;
    plant.quantity += quantity;

    return plant.quantity === 1
      ? `${quantity} ${plantName} has successfully ripened.`
      : `${quantity} ${plantName}s have successfully ripened.`;
  }

  harvestPlant(plantName) {
    const plantIndex = this.plants.findIndex(p => p.plantName === plantName);

    if (plantIndex === -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    const plant = this.plants[plantIndex];

    if (!plant.ripe) {
      throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
    }

    this.plants.splice(plantIndex, 1);
    this.storage.push(`${plantName} (${plant.quantity})`);
    this.spaceAvailable += plant.spaceRequired;

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    const sortedPlants = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));

    return [`The garden has ${this.spaceAvailable} free space left.`,
    `Plants in the garden: ${sortedPlants.join(', ')}`,
    `Plants in storage: ${this.storage.length ? this.storage.join(', ') : 'The storage is empty.'}`]
      .join('\n');
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)