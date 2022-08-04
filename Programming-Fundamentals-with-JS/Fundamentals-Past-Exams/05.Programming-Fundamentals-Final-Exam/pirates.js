function pirates(input = []) {
  const targets = {};
  const events = {
    Plunder: (town, people, gold) => {
      /* You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold. 
      For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
      If any of those two values (population or gold) reaches zero, the town is disbanded.
      You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!" */
      people = Number(people);
      gold = Number(gold);

      targets[town].population -= people;
      targets[town].gold -= gold;

      console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

      if (targets[town].population <= 0 || targets[town].gold <= 0) {
        delete targets[town];
        console.log(`${town} has been wiped off the map!`);
      }
    },
    Prosper: (town, gold) => {
      /* There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
      The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
      If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message: 
      "{gold added} gold added to the city treasury. {town} now has {total gold} gold." */
      gold = Number(gold);

      if (gold > 0) {
        targets[town].gold += gold;
        console.log(`${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`);
      } else {
        console.log('Gold added cannot be a negative number!');
      }
    }
  }

  while (input[0] !== 'Sail') {
    let [city, population, gold] = input
      .shift()
      .split('||');
    population = Number(population);
    gold = Number(gold);

    if (!targets.hasOwnProperty(city)) {
      targets[city] = {
        population: 0,
        gold: 0
      };
    }

    targets[city].population += population;
    targets[city].gold += gold;
  }

  input.shift();

  while (input[0] !== 'End') {
    let [event, town, paramOne, paramTwo] = input
      .shift()
      .split('=>');

    events[event](town, paramOne, paramTwo);
  }

  const settlements = Object.keys(targets);

  if (settlements.length) {
    console.log(`Ahoy, Captain! There are ${settlements.length} wealthy settlements to go to:`);

    for (const town of settlements) {
      console.log(`${town} -> Population: ${targets[town].population} citizens, Gold: ${targets[town].gold} kg`);
    }
  } else {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
  }
}

pirates(["Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End"]);
pirates(["Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End"]);