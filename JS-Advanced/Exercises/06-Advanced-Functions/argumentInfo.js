function argumentInfo() {
  const params = Array.from(arguments);
  const types = {};

  for (const param of params) {
    const type = typeof param;
    console.log(`${type}: ${param}`);

    if (types[type] === undefined) {
      types[type] = 0;
    }
    types[type]++;
  }

  Object
    .entries(types)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, occurs]) => console.log(`${type} = ${occurs}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });