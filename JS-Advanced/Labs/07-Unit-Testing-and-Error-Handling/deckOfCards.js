function printDeckOfCards(cards) {
  let result = [];

  for (const inputCard of cards) {
    const face = inputCard.slice(0, -1);
    const suit = inputCard.slice(-1);

    try {
      const card = createCard(face, suit);
      result.push(card);
    } catch (err) {
      result = [`Invalid card: ${inputCard}`];
      break;
    }
  }

  console.log(result.join(' '));

  function createCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
      S: '\u2660',
      H: '\u2665',
      D: '\u2666',
      C: '\u2663'
    };

    if (!faces.includes(face)) {
      throw new TypeError('Invalid face: ' + face);
    }
    if (!suits[suit]) {
      throw new Error('Invalid suit: ' + suit);
    }

    return {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      }
    };
  }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);