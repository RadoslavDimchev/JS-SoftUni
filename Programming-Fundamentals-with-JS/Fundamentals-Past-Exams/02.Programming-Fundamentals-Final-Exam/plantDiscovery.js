function plantDiscovery(input = []) {
  const number = Number(input.shift());
  const plants = {};

  const commands = {
    Rate: (plant, rating) => {
      /* add the given rating to the plant (store all ratings) */
      rating = Number(rating);
      plant.rating.push(rating);
    },
    Update: (plant, newRarity) => {
      /* update the rarity of the plant with the new one */
      newRarity = Number(newRarity);
      plant.rarity = newRarity;
    },
    Reset: (plant) => {
      /* remove all the ratings of the given plant */
      plant.rating = [];
    }
  };

  for (let i = 0; i < number; i++) {
    const [name, rarity] = input.shift().split('<->');

    plants[name] = {
      rarity,
      rating: [],
    };
  }

  while (input[0] !== 'Exhibition') {
    const [command, data] = input.shift().split(': ');
    const [name, parameter] = data.split(' - ');

    const plant = plants[name];

    plant
      ? commands[command](plant, parameter)
      : console.log('error');
  }

  console.log('Plants for the exhibition:');

  for (const [plant, data] of Object.entries(plants)) {
    const ratingLength = data.rating.length;
    const ratingSum = data.rating.reduce((a, b) => a + b, 0);
    const averageRating = ratingSum ? ratingSum / ratingLength : 0;

    console.log(`- ${plant}; Rarity: ${data.rarity}; Rating: ${averageRating.toFixed(2)}`);
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