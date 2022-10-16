const { expect } = require('chai');
const { dealership } = require('./dealership');

describe('dealership', () => {
  describe('newCarCost', () => {
    it('Return your old car with discount', () => {
      expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
    });

    it('Return newCarPrice', () => {
      expect(dealership.newCarCost('Test', 20000)).to.equal(20000);
    });
  });

  describe('carEquipment', () => {
    it('return array with selected extras', () => {
      expect(dealership.carEquipment(['test1Extra', 'test2Extra', 'test3Extra'], [0, 2])).to.deep.equal(['test1Extra', 'test3Extra']);
    });

    it('empty indexArr, return empty array', () => {
      expect(dealership.carEquipment(['test1Extra', 'test2Extra', 'test3Extra'], [])).to.deep.equal([]);
    });

    it('empty extras, return array with undefined on indexes', () => {
      expect(dealership.carEquipment([], [0, 2])).to.deep.equal([undefined, undefined]);
    });
  });

  describe('euroCategory', () => {
    it('category without discount', () => {
      expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
    });

    it('category with discount edge case', () => {
      expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
    });

    it('low category without discount', () => {
      expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
    });
  });
});