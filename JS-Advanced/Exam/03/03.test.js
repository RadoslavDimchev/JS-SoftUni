const { expect } = require('chai');
const { chooseYourCar } = require('./03');

describe('chooseYourCar', () => {
  describe('choosingType', () => {
    it('year of the car is greater or equal to 2010', () => {
      expect(chooseYourCar.choosingType('Sedan', 'black', 2010)).to.equal('This black Sedan meets the requirements, that you have.');
      expect(chooseYourCar.choosingType('Sedan', 'black', 2011)).to.equal('This black Sedan meets the requirements, that you have.');
    });

    it('too old car', () => {
      expect(chooseYourCar.choosingType('Sedan', 'black', 2009)).to.equal('This Sedan is too old for you, especially with that black color.');
      expect(chooseYourCar.choosingType('Sedan', 'black', 1900)).to.equal('This Sedan is too old for you, especially with that black color.');
    });

    it('different type', () => {
      expect(() => chooseYourCar.choosingType('testType', 'black', 2000)).to.throw('This type of car is not what you are looking for.');
    });

    it('invalid year', () => {
      expect(() => chooseYourCar.choosingType('Sedan', 'black', 1899)).to.throw('Invalid Year!');
      expect(() => chooseYourCar.choosingType('Sedan', 'black', 2023)).to.throw('Invalid Year!');
    });
  });

  describe('brandName', () => {
    it('happy path', () => {
      expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1)).to.equal('BMW, Peugeot');
      expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 0)).to.equal('Toyota, Peugeot');
    });

    it('invalid Information', () => {
      expect(() => chooseYourCar.brandName(undefined, 1)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], undefined)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 3)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], -1)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.brandName(undefined, undefined)).to.throw('Invalid Information!');
    });
  });

  describe('carFuelConsumption', () => {
    it('liters/100km is less or equal to 7L', () => {
      expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
      expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
    });

    it('car burns too much fuel', () => {
      expect(chooseYourCar.carFuelConsumption(10, 5)).to.equal('The car burns too much fuel - 50.00 liters!');
    });

    it('invalid Information', () => {
      expect(() => chooseYourCar.carFuelConsumption(undefined, 1)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption(1, undefined)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption(undefined, undefined)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption(-1, -1)).to.throw('Invalid Information!');
    });
  });
});