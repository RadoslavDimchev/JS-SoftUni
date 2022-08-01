function destinationMapper(input = '') {
  const destinations = [];
  const pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
  let points = 0;
  let valid;

  while ((valid = pattern.exec(input)) !== null) {
    const currDestination = valid.groups.destination;

    destinations.push(currDestination);
    points += currDestination.length;
  }

  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");