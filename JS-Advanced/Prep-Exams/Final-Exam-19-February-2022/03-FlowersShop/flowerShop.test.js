const { expect } = require('chai');
const { flowerShop } = require('./flowerShop');

describe('flowerShop', () => {
  describe('calcPriceOfFlowers', () => {
    it('happy path, return price of flowers', () => {
      expect(flowerShop.calcPriceOfFlowers('testFlower', 10, 10)).to.equal('You need $100.00 to buy testFlower!');
    });

    it('invalid flower', () => {
      expect(() => flowerShop.calcPriceOfFlowers(10, 10, 10)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers([], 10, 10)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers(undefined, 10, 10)).to.throw('Invalid input!');
    });

    it('invalid price', () => {
      expect(() => flowerShop.calcPriceOfFlowers('testFlower', '10', 10)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('testFlower', [], 10)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('testFlower', undefined, 10)).to.throw('Invalid input!');
    });

    it('invalid quantity', () => {
      expect(() => flowerShop.calcPriceOfFlowers('testFlower', 10, '10')).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('testFlower', 10, [])).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('testFlower', 10, undefined)).to.throw('Invalid input!');
    });
  });

  describe('checkFlowersAvailable', () => {
    it('flower is present in the garden', () => {
      expect(flowerShop.checkFlowersAvailable('testFlower', ['testFlower2', 'testFlower'])).to.equal('The testFlower are available!');
    });

    it('flower is not present in the garden', () => {
      expect(flowerShop.checkFlowersAvailable('testFlower', ['testFlower2', 'testFlower3'])).to.equal('The testFlower are sold! You need to purchase more!');
    });
  });

  describe('sellFlowers', () => {
    it('remove flower on that space', () => {
      expect(flowerShop.sellFlowers(['testFlower', 'testFlower2', 'testFlower3'], 1)).to.equal('testFlower / testFlower3');
    });

    it('invalid gardenArr', () => {
      expect(() => flowerShop.sellFlowers('test', 1)).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers([], 1)).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers(undefined, 1)).to.throw('Invalid input!');
    });

    it('invalid gardenArr', () => {
      expect(() => flowerShop.sellFlowers(['testFlower'], '1')).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers(['testFlower'], [])).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers(['testFlower'], undefined)).to.throw('Invalid input!');
    });
  });
});