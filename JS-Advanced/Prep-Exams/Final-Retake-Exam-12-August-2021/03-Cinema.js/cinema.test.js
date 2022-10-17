const { expect } = require('chai');
const { cinema } = require('./cinema');

describe('cinema', () => {
  describe('showMovies', () => {
    it('available movies', () => {
      expect(cinema.showMovies(['Test1', 'Test2'])).to.equal('Test1, Test2');
    });

    it('array length is zero', () => {
      expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
    });
  });

  describe('ticketPrice', () => {
    it('return price for project in schedule', () => {
      expect(cinema.ticketPrice('Premiere')).to.equal(12);
      expect(cinema.ticketPrice('Normal')).to.equal(7.50);
      expect(cinema.ticketPrice('Discount')).to.equal(5.50);
    });

    it('throw error for project that is not in schedule', () => {
      expect(() => cinema.ticketPrice('Test')).to.throw('Invalid projection type.');
    });
  });

  describe('swapSeatsInHall', () => {
    it('happy path', () => {
      expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
    });

    it('happy path edge case', () => {
      expect(cinema.swapSeatsInHall(19, 20)).to.equal('Successful change of seats in the hall.');
    });

    it('numbers do not exist', () => {
      expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall()).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('the numbers are not integers', () => {
      expect(cinema.swapSeatsInHall(1, 2.2)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(1.1, 2)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(1.1, 2.2)).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('number are greater than the capacity - 20', () => {
      expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(21, 2)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(21, 22)).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('seats are less than zero', () => {
      expect(cinema.swapSeatsInHall(-1, 2)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(1, -2)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(-1, -2)).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('seats are zero', () => {
      expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('invalid input', () => {
      expect(cinema.swapSeatsInHall('1', '2')).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(1, '2')).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall('1', 2)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall([], undefined)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall({}, null)).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('similar seats', () => {
      expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
    });
  });
});