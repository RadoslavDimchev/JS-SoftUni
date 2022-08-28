function townsToJSON(input) {
  const result = [];

  for (let i = 1; i < input.length; i++) {
    const data = input[i];
    let [town, latitude, longitude] = data
      .split('|')
      .filter(x => x)
      .map(x => x.trim());

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    result.push(factory(town, latitude, longitude));
  }

  console.log(JSON.stringify(result));

  function factory(town, latitude, longitude) {
    return {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude)
    }
  }
}

townsToJSON(['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |']);
townsToJSON(['| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |']);