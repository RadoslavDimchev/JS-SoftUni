function cars(input) {
  const collection = {};
  const comamnds = {
    create(name, word, parentName) {
      collection[name] = word ? Object.create(collection[parentName]) : {};
    },
    set(name, key, value) {
      collection[name][key] = value;
    },
    print(name) {
      const entries = [];
      for (const key in collection[name]) {
        entries.push(`${key}:${collection[name][key]}`);
      }
      console.log(entries.join(','));
    }
  };

  for (const data of input) {
    const [command, p1, p2, p3] = data.split(' ');
    comamnds[command](p1, p2, p3);
  }
}

cars(['create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2']);