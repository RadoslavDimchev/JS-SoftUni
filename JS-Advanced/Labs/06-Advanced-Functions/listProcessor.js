function listProcessor(input) {
  let collection = [];
  const commands = {
    add: (str) => collection.push(str),
    remove: (str) => collection = collection.filter(s => s !== str),
    print: () => console.log(collection.join(','))
  };

  for (const data of input) {
    const [command, str] = data.split(' ');
    commands[command](str);
  }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);