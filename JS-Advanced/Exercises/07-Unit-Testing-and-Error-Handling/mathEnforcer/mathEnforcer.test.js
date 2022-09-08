const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('mathEnforcer', () => {
  describe('addFive', () => {
    it('should return correct result with positive integer', () => {
      expect(mathEnforcer.addFive(1)).to.equal(6);
    });

    it('should return correct result with negative integer', () => {
      expect(mathEnforcer.addFive(-6)).to.equal(-1);
    });

    it('should return undefined for not a number param', () => {
      expect(mathEnforcer.addFive('1')).to.be.undefined;
    });

    it('should return correct result with floating-point number', () => {
      expect(mathEnforcer.addFive(0.11)).to.be.closeTo(5.11, 0.01);
    });
  });

  describe('subtractTen', () => {
    it('should return correct result with positive integer', () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });

    it('should return correct result with negative integer', () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it('should return undefined for not a number param', () => {
      expect(mathEnforcer.subtractTen('1')).to.be.undefined;
    });

    it('should return correct result with floating-point number', () => {
      expect(mathEnforcer.subtractTen(10.11)).to.be.closeTo(0.11, 0.01);
    });
  });

  describe('sum', () => {
    it('should return correct result with integer params', () => {
      expect(mathEnforcer.sum(10, -5)).to.equal(5);
    });

    it('should return correct result with floating-point params', () => {
      expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.01);
    });

    it('should return undefined with not a number first param', () => {
      expect(mathEnforcer.sum('1', 1)).to.be.undefined;
    });

    it('should return undefined with not a number second param', () => {
      expect(mathEnforcer.sum(1, '1')).to.be.undefined;
    });
  });
});