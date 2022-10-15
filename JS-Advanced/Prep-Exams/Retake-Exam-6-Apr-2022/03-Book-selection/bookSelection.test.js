const { bookSelection } = require('./bookSelection');
const { expect } = require('chai');

describe('bookSelection', () => {
  describe('isGenreSuitable', () => {
    it('Happy path', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 13)).to.be.equal('Those books are suitable');
      expect(bookSelection.isGenreSuitable('Horror', 13)).to.be.equal('Those books are suitable');
      expect(bookSelection.isGenreSuitable('Test', 13)).to.be.equal('Those books are suitable');
      expect(bookSelection.isGenreSuitable('Test', 12)).to.be.equal('Those books are suitable');
    });

    it('Not suitable', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 11)).to.be.equal('Books with Thriller genre are not suitable for kids at 11 age');
      expect(bookSelection.isGenreSuitable('Horror', 11)).to.be.equal('Books with Horror genre are not suitable for kids at 11 age');
    });

    it('Not suitable, edge case', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal('Books with Thriller genre are not suitable for kids at 12 age');
      expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal('Books with Horror genre are not suitable for kids at 12 age');
    });
  });

  describe('isItAffordable', () => {
    it('Happy path', () => {
      expect(bookSelection.isItAffordable(1, 2)).to.be.equal('Book bought. You have 1$ left');
    });

    it('Happy path edge case', () => {
      expect(bookSelection.isItAffordable(1, 1)).to.be.equal('Book bought. You have 0$ left');
    });

    it('Not enough budget', () => {
      expect(bookSelection.isItAffordable(2, 1)).to.be.equal('You don\'t have enough money');
    });

    it('Invalid price', () => {
      expect(() => bookSelection.isItAffordable('1', 1)).to.throw('Invalid input');
      expect(() => bookSelection.isItAffordable([], 1)).to.throw('Invalid input');
      expect(() => bookSelection.isItAffordable(undefined, 1)).to.throw('Invalid input');
    });

    it('Invalid budget', () => {
      expect(() => bookSelection.isItAffordable(1, '1')).to.throw('Invalid input');
      expect(() => bookSelection.isItAffordable(1, [])).to.throw('Invalid input');
      expect(() => bookSelection.isItAffordable(1, undefined)).to.throw('Invalid input');
    });
  });

  describe('suitableTitles', () => {
    it('Happy path', () => {
      expect(bookSelection.suitableTitles([{ title: 'title', genre: 'genre' }], 'genre')).to.deep.equal(['title']);
    });

    it('Two matches', () => {
      expect(bookSelection.suitableTitles([{ title: 'title', genre: 'genre' }, { title: 'title2', genre: 'genre' }], 'genre')).to.deep.equal(['title', 'title2']);
    });

    it('No match', () => {
      expect(bookSelection.suitableTitles([{ title: 'title', genre: 'genre' }], 'genre2')).to.deep.equal([]);
    });

    it('Invalid array input books', () => {
      expect(() => bookSelection.suitableTitles('test', 'genre')).to.throw('Invalid input');
      expect(() => bookSelection.suitableTitles(1, 'genre')).to.throw('Invalid input');
      expect(() => bookSelection.suitableTitles('undefined', 'genre')).to.throw('Invalid input');
    });

    it('Invalid wantedGenre input', () => {
      expect(() => bookSelection.suitableTitles([{ title: 'title', genre: 'genre' }], [])).to.throw('Invalid input');
      expect(() => bookSelection.suitableTitles([{ title: 'title', genre: 'genre' }], 1)).to.throw('Invalid input');
      expect(() => bookSelection.suitableTitles([{ title: 'title', genre: 'genre' }], undefined)).to.throw('Invalid input');
    });
  });
});