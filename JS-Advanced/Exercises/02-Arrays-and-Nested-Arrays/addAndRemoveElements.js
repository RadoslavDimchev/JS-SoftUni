function addAndRemoveElements(input) {
  const result = [];
  let number = 1;

  for (const command of input) {
    if (command === 'add') {
      result.push(number);
    } else {
      result.pop();
    }

    number++;
  }

  if (result.length === 0) {
    console.log('Empty');
  } else {
    console.log(result.join('\n'));
  }
}

addAndRemoveElements(['add',
  'add',
  'add',
  'add']);
addAndRemoveElements(['add',
  'add',
  'remove',
  'add',
  'add']);
addAndRemoveElements(['remove',
  'remove',
  'remove']);