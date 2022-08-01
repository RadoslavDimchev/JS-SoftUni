function worldTour(input = []) {
  let stops = input.shift();
  const commands = {
    'Add Stop': (stops, index, string) => {
      // Insert the given string at that index only if the index is valid
      index = Number(index);

      if (index >= 0 && index < stops.length) {
        let firstPart = stops.substring(0, index);
        let secondPart = stops.substring(index);
        stops = firstPart + string + secondPart;
      }

      return stops;
    },
    'Remove Stop': (stops, start, end) => {
      /* Remove the elements of the string from the starting index
       to the end index (inclusive) if both indices are valid */
      start = Number(start);
      end = Number(end);

      if (start >= 0 && start <= end && end < stops.length) {
        stops = stops.substring(0, start) + stops.substring(end + 1);
      }

      return stops;
    },
    'Switch': (stops, oldString, newString) => {
      /* if the old string is in the initial string, 
      replace it with the new one (all occurrences) */
      if (stops.includes(oldString)) {
        stops = stops.split(oldString).join(newString);
      }

      return stops;
    }
  }

  while (input[0] !== 'Travel') {
    const [command, firstParam, secondParam] = input
      .shift()
      .split(':');

    stops = commands[command](stops, firstParam, secondParam);
    console.log(stops);
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"]);