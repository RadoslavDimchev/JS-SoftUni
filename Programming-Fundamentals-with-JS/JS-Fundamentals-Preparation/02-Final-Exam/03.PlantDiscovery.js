function plantDiscovery(input = []) {
  const number = input.shift();
  const plants = {};

  for (let i = 0; i < number; i++) {
    let [plant, rarity] = input.shift().split('<->');
    rarity = Number(rarity);

    plants[plant] = { rarity, rating: [] };
  }

  const commands = {
    Rate,
    Update,
    Reset,
  }

  while (input[0] !== 'Exhibition') {
    let [command, data] = input.shift().split(': ');
    let [p1, p2] = data.split(' - ');

    commands[command](p1, p2);
  }

  console.log('Plants for the exhibition:');

  Object
    .entries(plants)
    .forEach(([name, plant]) => {
      console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${(average(plant.rating)).toFixed(2)}`);
    });

  function average(arr) {
    if (!arr.length) {
      return 0;
    }

    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  function checkForPlant(plant) {
    if (plants.hasOwnProperty(plant)) {
      return true;
    }

    console.log('error');
    return false;
  }

  function Rate(plant, rating) {
    if (checkForPlant(plant)) {
      rating = Number(rating);
      plants[plant].rating.push(rating);
    }
  }

  function Update(plant, rarity) {
    if (checkForPlant(plant)) {
      rarity = Number(rarity);
      plants[plant].rarity = rarity;
    }
  }

  function Reset(plant) {
    if (checkForPlant(plant)) {
      plants[plant].rating = [];
    }
  }
}

plantDiscovery(["3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"]);
plantDiscovery(["2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition"]);