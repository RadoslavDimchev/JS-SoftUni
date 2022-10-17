const { expect } = require('chai');
const { numberOperations } = require('./numberOperations');

describe('numberOperations', () => {
  describe('powNumber', () => {
    it('with positive number return number * number', () => {
      expect(numberOperations.powNumber(2)).to.equal(4);
    });

    it('with negative number', () => {
      expect(numberOperations.powNumber(-2)).to.equal(4);
    });

    it('with zero number', () => {
      expect(numberOperations.powNumber(0)).to.equal(0);
    });
  });

  describe('numberChecker', () => {
    it('the number is lower than 100', () => {
      expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
      expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
    });

    it('the number is greater than 100', () => {
      expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
    });

    it('the number is 100', () => {
      expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
    });

    it('parses string number to number', () => {
      expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
    });

    it('invalid input number', () => {
      expect(() => numberOperations.numberChecker('number')).to.throw('The input is not a number!');
      expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
    });
  });

  describe('sumArrays', () => {
    it('return sum of arrays with one parameter', () => {
      expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2]);
    });

    it('return sum of arrays with parameters', () => {
      expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([2, 4, 6]);
    });

    it('return sum of arrays with negative parameters', () => {
      expect(numberOperations.sumArrays([-1, -2, -3], [-1, -2, -3])).to.deep.equal([-2, -4, -6]);
    });

    it('return sum of arrays with different number of parameters', () => {
      expect(numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3])).to.deep.equal([2, 4, 6, 4]);
    });

    it('return empty array', () => {
      expect(numberOperations.sumArrays([], [])).to.deep.equal([]);
    });
  });
});