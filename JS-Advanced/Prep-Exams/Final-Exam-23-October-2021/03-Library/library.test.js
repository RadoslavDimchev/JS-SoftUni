const { expect } = require('chai');
const { library } = require('./library');

describe('library', () => {
  describe('calcPriceOfBook', () => {
    it('return price of the book', () => {
      expect(library.calcPriceOfBook('BookName', 2020)).to.equal('Price of BookName is 20.00');
    });

    it('year of publication is less than or equal to 1980, 50% discount', () => {
      expect(library.calcPriceOfBook('BookName', 1979)).to.equal('Price of BookName is 10.00');
      expect(library.calcPriceOfBook('BookName', 1980)).to.equal('Price of BookName is 10.00');
    });

    it('invalid input', () => {
      expect(() => library.calcPriceOfBook(1, 2020)).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook('book', 2020.2)).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook('book', '2020')).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook(1, '2020')).to.throw('Invalid input');
    });
  });

  describe('findBook', () => {
    it('happy path return the desiredBook', () => {
      expect(library.findBook(['TestBook', 'BookName'], 'BookName')).to.equal('We found the book you want.');
    });

    it('the book is not here', () => {
      expect(library.findBook(['TestBook', 'TestBook2'], 'BookName')).to.equal('The book you are looking for is not here!');
    });

    it('length of booksArr is zero', () => {
      expect(() => library.findBook([], 'BookName')).to.throw('No books currently available');
    });
  });

  describe('arrangeTheBooks', () => {
    it('books are arranged', () => {
      expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
      expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
    });

    it('insufficient space', () => {
      expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
    });

    it('invalid input', () => {
      expect(() => library.arrangeTheBooks('1')).to.throw('Invalid input');
      expect(() => library.arrangeTheBooks('test')).to.throw('Invalid input');
      expect(() => library.arrangeTheBooks(undefined)).to.throw('Invalid input');
      expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
      expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
    });
  });
});