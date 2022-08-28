function townPopulation(input) {
  const result = {};

  for (const data of input) {
    let [town, population] = data.split(' <-> ');
    population = Number(population);

    if (result[town] !== undefined) {
      population += result[town];
    }

    result[town] = population;
  }

  for (const town in result) {
    console.log(`${town} : ${result[town]}`);
  }

  // second way to print the key/value pairs
  /* for (const [town, population] of Object.entries(result)) {
    console.log(`${town} : ${population}`);
  } */
}

// solution with reduce()

/* function townPopulation(input) {
  const result = input.reduce((obj, kvp) => {
    kvp = kvp.split(' <-> ');

    if (!obj.hasOwnProperty(kvp[0])) {
      obj[kvp[0]] = 0;
    }

    obj[kvp[0]] += Number(kvp[1]);
    return obj;
  }, {})

  for (const town in result) {
    console.log(`${town} : ${result[town]}`);
  }
} */

townPopulation(['Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000']);