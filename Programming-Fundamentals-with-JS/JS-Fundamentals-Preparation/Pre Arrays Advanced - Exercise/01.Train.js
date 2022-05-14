function train(array) {
  let passengersInWagons = array.shift().split(' ').map(Number);
  let capacity = array.shift();

  for (let command of array) {
    let currCommand = command.split(' ');
    if (currCommand[0] === 'Add') {
      passengersInWagons.push(Number(currCommand[1]));
    } else {
      for (let i = 0; i < passengersInWagons.length; i++) {
        if (passengersInWagons[i] + Number(currCommand[0]) <= capacity) {
          passengersInWagons[i] += Number(currCommand[0]);
          break;
        }
      }
    }
  }

  console.log(passengersInWagons.join(' '));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);