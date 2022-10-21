const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe('rentCar', () => {
  describe('searchCar', () => {
    it('return number of matching elements', () => {
      expect(rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'BMW')).to.equal('There is 1 car of model BMW in the catalog!');
      expect(rentCar.searchCar(['Volkswagen', 'BMW', 'Audi', 'BMW'], 'BMW')).to.equal('There is 2 car of model BMW in the catalog!');
    });

    it('no matching elements', () => {
      expect(() => rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'test')).to.throw('There are no such models in the catalog!');
    });

    it('invalid input', () => {
      expect(() => rentCar.searchCar(undefined, 'test')).to.throw('Invalid input!');
      expect(() => rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], undefined)).to.throw('Invalid input!');
      expect(() => rentCar.searchCar(undefined, undefined)).to.throw('Invalid input!');
    });
  });

  describe('calculatePriceOfCar', () => {
    it('returns the model and the price it will cost for renting a car for the given days', () => {
      expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal('You choose BMW and it will cost $90!');
    });

    it('there is no such model', () => {
      expect(() => rentCar.calculatePriceOfCar('Opel', 2)).to.throw('No such model in the catalog!');
    });

    it('invalid input', () => {
      expect(() => rentCar.calculatePriceOfCar(undefined, 2)).to.throw('Invalid input!');
      expect(() => rentCar.calculatePriceOfCar('BMW', undefined)).to.throw('Invalid input!');
      expect(() => rentCar.calculatePriceOfCar(undefined, undefined)).to.throw('Invalid input!');
    });
  });

  describe('checkBudget', () => {
    it('budget is bigger or equal to cost', () => {
      expect(rentCar.checkBudget(50, 2, 100)).to.equal('You rent a car!');
      expect(rentCar.checkBudget(50, 2, 110)).to.equal('You rent a car!');
    });

    it('budget is less than cost', () => {
      expect(rentCar.checkBudget(50, 3, 100)).to.equal('You need a bigger budget!');
    });

    it('invalid input', () => {
      expect(() => rentCar.checkBudget(undefined, 2, 100)).to.throw('Invalid input!');
      expect(() => rentCar.checkBudget(50, undefined, 100)).to.throw('Invalid input!');
      expect(() => rentCar.checkBudget(50, 2, undefined)).to.throw('Invalid input!');
      expect(() => rentCar.checkBudget(undefined, undefined, undefined)).to.throw('Invalid input!');
    });
  });
});