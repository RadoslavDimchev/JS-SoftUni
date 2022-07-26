function thePianist(input = []) {
  const piecesNumber = Number(input.shift());
  const pieces = {};
  const commands = {
    Add,
    Remove,
    ChangeKey
  };

  for (let i = 0; i < piecesNumber; i++) {
    const [piece, composer, key] = input.shift().split('|');
    pieces[piece] = { composer, key };
  }

  while (input[0] !== 'Stop') {
    const [command, p1, p2, p3] = input.shift().split('|');
    commands[command](p1, p2, p3);
  }

  for (let [piece, data] of Object.entries(pieces)) {
    console.log(`${piece} -> Composer: ${data.composer}, Key: ${data.key}`);
  }

  function Add(piece, composer, key) {
    if (!pieces.hasOwnProperty(piece)) {
      // You need to add the given piece with the information about it to the other pieces
      pieces[piece] = { composer, key };
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    } else {
      // If the piece is already in the collection, print:
      console.log(`${piece} is already in the collection!`);
    }
  }

  function Remove(piece) {
    if (pieces.hasOwnProperty(piece)) {
      // If the piece is in the collection, remove it and print
      delete pieces[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }
  }

  function ChangeKey(piece, newKey) {
    if (pieces.hasOwnProperty(piece)) {
      // If the piece is in the collection, change its key with the given one and print:
      pieces[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }
  }
}

thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
]);
thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]);