function destinationMapper(input = '') {
  const destinations = [];
  const pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
  let match = pattern.exec(input);
  let travelPoints = 0;

  while (match) {
    destinations.push(match[2]);
    travelPoints += match[2].length;
    match = pattern.exec(input);
  }

  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");