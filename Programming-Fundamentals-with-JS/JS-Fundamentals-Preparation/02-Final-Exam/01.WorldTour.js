function worldTour(input = []) {
  // parse input
  let stops = input.shift();

  while (input[0] !== 'Travel') {
    let [command, p1, p2] = input
      .shift()
      .split(':');

    if (command === 'Add Stop') {
      // Insert the given string at that index
      const index = Number(p1);
      const string = p2;

      // - if the index is valid
      if (index >= 0 && index < stops.length) {
        stops = stops.substring(0, index) + string + stops.substring(index);
      }

    } else if (command === 'Remove Stop') {
      // Remove the elements of the string from the starting index to the end index
      const start = Number(p1);
      const end = Number(p2);

      // - if both indixes are valid
      if (start >= 0 && start <= end && end < stops.length) {
        stops = stops.substring(0, start) + stops.substring(end + 1);
      }
    } else if (command === 'Switch') {
      // If the old string is in the initial string, 
      // replace it with the new one (all occurrences)
      const oldString = p1;
      const newString = p2;

      stops = stops.split(oldString).join(newString);
    }

    // print the current state of the string
    console.log(stops);
  }

  // print all stops
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"]);