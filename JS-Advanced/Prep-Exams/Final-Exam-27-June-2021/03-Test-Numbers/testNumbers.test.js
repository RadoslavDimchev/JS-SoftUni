const { expect } = require('chai');
const { testNumbers } = require('./testNumbers');

describe('testNumbers', () => {
  describe('sumNumber', () => {
    it('sum of two positive integers', () => {
      expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
    });

    it('sum of two negative integers', () => {
      expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00');
    });

    it('sum of float numbers', () => {
      expect(testNumbers.sumNumbers(1.55, 1.2)).to.equal('2.75');
    });

    it('sum of float numbers with more three nums after dp', () => {
      expect(testNumbers.sumNumbers(1.556, 1.2)).to.equal('2.76');
    });

    it('invalid parameters', () => {
      expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
      expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
      expect(testNumbers.sumNumbers('1', '1')).to.be.undefined;
    });
  });

  describe('numberChecker', () => {
    it('even number', () => {
      expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
    });

    it('odd number', () => {
      expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
    });

    it('validates number, parse string number to number', () => {
      expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
    });

    it('not a number', () => {
      expect(() => testNumbers.numberChecker('test')).to.throw('The input is not a number!');
      expect(() => testNumbers.numberChecker(undefined)).to.throw('The input is not a number!');
    });
  });

  describe('averageSumArray', () => {
    it('average sum of positive integers', () => {
      expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
    });
  });
});