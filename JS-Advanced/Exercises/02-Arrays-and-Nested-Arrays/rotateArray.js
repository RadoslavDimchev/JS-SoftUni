function rotateArray(arr, rotations) {
  const amount = rotations % arr.length;

  for (let i = 0; i < amount; i++) {
    arr.unshift(arr.pop());
  }

  console.log(arr.join(' '));
}

rotateArray(['1',
  '2',
  '3',
  '4'],
  2);
rotateArray(['Banana',
  'Orange',
  'Coconut',
  'Apple'],
  15);