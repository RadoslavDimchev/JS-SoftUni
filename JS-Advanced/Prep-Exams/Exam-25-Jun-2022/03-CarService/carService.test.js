const { expect } = require('chai');
const { carService } = require('./carService');

describe('carService', () => {
  describe('isItExpensive', () => {
    it('Happy path', () => {
      expect(carService.isItExpensive('testIssues')).to.equal('The overall price will be a bit cheaper');
    });

    it('Engine issue', () => {
      expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
    });

    it('Transmission issue', () => {
      expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
    });
  });

  describe('discount', () => {
    it('Happy path with 15% discount', () => {
      expect(carService.discount(5, 10)).to.equal(`Discount applied! You saved ${1.5}$`);
      expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved ${1.5}$`);
    });

    it('Happy path with 30% discount', () => {
      expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved ${3}$`);
    });

    it('lack of numberOfParts', () => {
      expect(carService.discount(2, 1)).to.equal('You cannot apply a discount');
      expect(carService.discount(0, 1)).to.equal('You cannot apply a discount');
      expect(carService.discount(-1, 1)).to.equal('You cannot apply a discount');
    });

    it('Invalid numberOfParts type', () => {
      expect(() => carService.discount('test', 1)).to.throw('Invalid input');
      expect(() => carService.discount([], 1)).to.throw('Invalid input');
      expect(() => carService.discount(undefined, 1)).to.throw('Invalid input');
    });

    it('Invalid totalPrice type', () => {
      expect(() => carService.discount(1, 'test')).to.throw('Invalid input');
      expect(() => carService.discount(1, [])).to.throw('Invalid input');
      expect(() => carService.discount(1, undefined)).to.throw('Invalid input');
    });
  });

  describe('partsToBuy', () => {
    it('Happy path with one needed part', () => {
      expect(carService.partsToBuy([{ part: 'Test1', price: 1 }], ['Test1'])).to.equal(1);
    });

    it('Happy path with two needed parts', () => {
      expect(carService.partsToBuy(
        [
          { part: 'Test1', price: 1 },
          { part: 'Test2', price: 2 },
          { part: 'Test3', price: 3 }
        ],
        ['Test1', 'Test2'])
      ).to.equal(3);
    });

    it('Empty partsCatalog', () => {
      expect(carService.partsToBuy([], [])).to.equal(0);
    });

    it('Invalid partsCatalog type', () => {
      expect(() => carService.partsToBuy('test', [])).to.throw('Invalid input');
      expect(() => carService.partsToBuy(1, [])).to.throw('Invalid input');
      expect(() => carService.partsToBuy(undefined, [])).to.throw('Invalid input');
    });

    it('Invalid neededParts type', () => {
      expect(() => carService.partsToBuy([], 'test')).to.throw('Invalid input');
      expect(() => carService.partsToBuy([], 1)).to.throw('Invalid input');
      expect(() => carService.partsToBuy([], undefined)).to.throw('Invalid input');
    });
  });
});